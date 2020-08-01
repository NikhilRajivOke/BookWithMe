const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config/dev');
exports.login = (req, res) => {
    const { email, password } = req.body;

    if (!password || !email) {
        return res.sendApiError({title: 'Missing data', detail: 'Email or Password is missing !' })
    }

    User.findOne({ email }, (err, findUser) => {
        if (err) {
            return res.mongoError(err);
        }
        if (!findUser) {
            return res.sendApiError({title: 'Invalid User', detail: 'User with provided email does not exist !!' })
        }

        if (findUser.hasSamePassword(password)) {
            const token = jwt.sign({
                sub: findUser.id,
                username: findUser.username,

            }, config.SECRET_KEY, { expiresIn: '2h' })

            return res.json({ status: 200, token });
        }
        else {
            return  res.sendApiError({title: 'Invalid Password', detail: 'Incorrect password !' })
        }

    })


}

exports.register = (req, res) => {
    const { username, email, password, passwordConfirmation } = req.body;

    if (!password || !email) {
        return res.sendApiError({title: 'Missing data', detail: 'Email or Password is missing !' })
    }

    if (password !== passwordConfirmation) {
        return res.sendApiError({title: 'Passwords not matching ', detail: 'Password must match confirm password !' })
    }
    
    User.findOne({ email }, (err, doc) => {
        if (err) {
            return res.mongoError(err);
        }

        if (doc) {
            return res.sendApiError({title: 'Register User', detail: 'User with provided email already exists !' })
        }

        const user = new User({ username, email, password });

        user.save((err, doc) => {
            if (err) {
                return res.mongoError(err);
            }

            return res.status(200).send({ status: 200, msg: "User Registered successfully!!" });
        })
    })

}

exports.onlyAuthUser = (req, res, next) => {
    const token = req.headers.authorization;

    if(token)
    {
        const decodedToken = parseToken(token);
        if (!decodedToken){return notAuthorized(res)};

        User.findById(decodedToken.sub,(err,foundUser)=>{
            if(err){
               res.mongoError(err);
            }
           if(foundUser){
               res.locals.user = foundUser;
               next();
           }
           else{
               
               return notAuthorized(res);
           }
        })
    
    }
    else
    {
       
        return notAuthorized(res);
    }
}
function parseToken(token) {
    try{
        return jwt.verify(token.split(' ')[1], config.SECRET_KEY);    
    }
    catch(error){
        return null;
    }
    
}
function notAuthorized(res) {
    return res.status(401).send({ error: [{ title: 'Not Authorized !', detail: 'Need to login to gain an access !!' }] });
}