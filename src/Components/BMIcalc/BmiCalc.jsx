import React,{useState,useEffect} from 'react';
import './BmiStyle.css';


function BmiCalc() {
   const [data,setData]=useState({height:0,weight:0});
   const [Calcbmi,setBmi]=useState(0);
   const [message,setMessage]=useState('');
   const HeightHandler=(e)=>{
    let temp=e.target.value;
    console.log(temp," height component");
    let obj=data;
    temp=parseInt(temp);
    obj.height=temp;
    setData({...obj});
   }
   console.log(data);
   const weightHandler=(event)=>{
    let temp =event.target.value;
    temp=parseInt(temp);
    let obj=data;
    obj.weight=temp;
    setData({...obj});
   }

   const bmicalc=()=>{
       let height=data.height;
       let weight=data.weight;
       let bmi=0;
       console.log(height, weight,"This");
    bmi=weight/((height/100)*(height/100));
    bmi=parseInt(bmi);
    console.log(bmi,"this is bmi ");
    if(bmi<18.50){
        setBmi(bmi);
        setMessage('Underweight');
    }
    else if(bmi>=18.5 && bmi <=24.9){
        setBmi(bmi);
        setMessage('Normal_weight')
    }
    else if(bmi>=25 && bmi <29.9){
        setBmi(bmi);
        setMessage('OverWeight');
    }
    else if(bmi>=30){
        setBmi(bmi);
        setMessage('Obesity');
    }
    else{
        setBmi(bmi);
        setMessage('Invalid');
    }
   }
   const clr=()=>{
       setData({height:0,weight:0});
       setBmi(0);
       setMessage(0);
   }
   
  return (
    <div className="Calculator">
        <h1 className="heading">BMI Calculator</h1>
<label>Enter the height</label>
   <input type="number" value={data.height} onChange={HeightHandler}/>
   <br />
   <label>Enter the weight</label>
   <input type="number" value={data.weight} onChange={weightHandler}/>
   <br />
   <button type='submit' onClick={bmicalc}>Calculate</button><button type='submit' onClick={clr}>Clear</button>
   <label>Result</label>
   <p>{"You current condition is :"+message +" & BMI is"+Calcbmi}</p>
   <br />
    </div>
  );
}

export default BmiCalc;
