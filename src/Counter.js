import React,{useState , useEffect } from 'react';
import './Couter-app.css';
import CounterView from './CounterView';
const Counter =(props) => {
    const [counter,setCount] = useState(0);

    const increment = (step) => () => setCount(counter + step);

    useEffect(()=>{
        console.log("From Parent")
    },[counter]
    )
    return(
    <div className="counter-app">
        <h1>{props.title}</h1>
        <CounterView countValue={counter} handleIncrement={increment}></CounterView>
    </div>
    );
};

export default Counter;