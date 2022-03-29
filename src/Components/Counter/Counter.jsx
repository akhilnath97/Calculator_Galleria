import React,{useState} from "react";
import "./counter.css";

const Counter=()=>{

const [count,setCount]=useState(0);
let Decrement=()=>{
    let counter=count;
    if(counter<=0){
        setCount(0);
    }
    else{
        setCount(counter-1);
    }
}
let Increment=()=>{
    setCount(count+1);
}

    return(
<div className="main">
    <div className="Title">
    <h1>Counter</h1>
    </div>
    <div className="Count">
    <label>Count</label>
<input className="Counter" value={count} readOnly />
<br />
<br />
</div>
<div className="btn">
 <button className="Decrement" onClick={Decrement}>-</button>
 <button className="Increment" onClick={Increment}>+</button>
 </div>
</div>

    );
}




export default Counter;