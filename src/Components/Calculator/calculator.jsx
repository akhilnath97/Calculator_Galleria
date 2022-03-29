import React,{useState,useEffect} from 'react';
import './calStyle.css'


function Calculator() {
   const [number,setNumber]=useState({input:'',output:''});
   
   const inputHandler=(e)=>{
    var data=e.target.value;
    setNumber({input:data});
   }
   const Add=()=>{
       var add=number.input+'+';
       setNumber({input:add});
   }
   const Sub=()=>{
    var sub=number.input+'-';
       setNumber({input:sub});
}
const Mul=()=>{
    var mul=number.input+'*';
       setNumber({input:mul});
}
const Div=()=>{
    var div=number.input+'/';
       setNumber({input:div});
}
const brack1=()=>{
    var div=number.input+'(';
       setNumber({input:div});
}
const brack2=()=>{
    var div=number.input+')';
       setNumber({input:div});
}
const one=()=>{
    var div=number.input+'1';
       setNumber({input:div});
}
const two=()=>{
    var div=number.input+'2';
       setNumber({input:div});
}
const three=()=>{
    var div=number.input+'3';
       setNumber({input:div});
}
const four=()=>{
    var div=number.input+'4';
       setNumber({input:div});
}
const five=()=>{
    var div=number.input+'5';
       setNumber({input:div});
}
const six=()=>{
    var div=number.input+'6';
       setNumber({input:div});
}
const seven=()=>{
    var div=number.input+'7';
       setNumber({input:div});
}
const eight=()=>{
    var div=number.input+'8';
       setNumber({input:div});
}
const nine=()=>{
    var div=number.input+'9';
       setNumber({input:div});
}
const zero=()=>{
    var div=number.input+'0';
       setNumber({input:div});
}
const dot=()=>{
    var div=number.input+'.';
       setNumber({input:div});
}
const dzero=()=>{
    var div=number.input+'00';
       setNumber({input:div});
}

const Calc=()=>{
    var ans='';
       ans=eval(number.input);
       setNumber({output:ans});
}
const clr=()=>{
    setNumber({input:'',output:''});
}
  return (
    <div className="Calculator">
        <h1>Calculator</h1>
        <label>Enter the operations</label>
   <input value={number.input} onChange={inputHandler}/>
   <br />
   <label>Result</label>
   <input value={number.output} readOnly/>
   <br />
   <div className='grid-btn'>
   <button onClick={one}>1</button>
   <button onClick={two}>2</button>
   <button onClick={three}>3</button>
   <button onClick={Add}>+</button>
   <button onClick={Sub}>-</button>
   <br />
   </div>
   <div className='grid-btn'>
   <button onClick={four}>4</button>
   <button onClick={five}>5</button>
   <button onClick={six}>6</button>
   <button onClick={Mul}>*</button>
   <button onClick={Div}>/</button>
   <br />
   </div>
    <div className='grid-btn'>
    <button onClick={seven}>7</button>
   <button onClick={eight}>8</button>
   <button onClick={nine}>9</button>
   <button onClick={brack1}>(</button>
   <button onClick={brack2}>)</button>
   
   </div>
   <div className='grid-btn'>
   <button onClick={dzero}>00</button>
   <button onClick={zero}>0</button>
   <button onClick={dot}>.</button>
   <button onClick={Calc}>=</button>
   <button onClick={clr}>C</button>
   </div>

    </div>
  );
}

export default Calculator;
