import React , {useEffect} from 'react';

const CounterView =(props) =>{

    const generateColor = () =>{

        return '#' + (Math.random() * 0xFFFFFF<<0).toString(16);
    }
    useEffect(()=>{
       
    },
    )

    return(
        <div style={{backgroundColor : generateColor()}}>
            <h2 className="value">{props.countValue}</h2>
            <button className="but" onClick={props.handleIncrement(1)}>Increment</button>
            <button className="but" onClick={props.handleIncrement(-1)}>Decrement</button>
        </div>
    )
}

export default CounterView;