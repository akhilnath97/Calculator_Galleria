import React,{useState,useEffect} from 'react';
import './tip.css'


function Tipcalculator() {
   const [billAmount,setbillAmount]=useState({bill:0,tip:0,numberOfDin:0});
   const [out,setOut]= useState(0);
   const [message,setMessage]=useState('');
   const BillAmountHandler=(e)=>{
    
    let temp=e.target.value;
    let obj=billAmount;
    temp=parseInt(temp);
    obj.bill=temp;
    setbillAmount({...obj});
   }
   const RatingHandler=(e)=>{
    let temp=e.target.value;
    let obj=billAmount;
    temp=parseInt(temp);
    obj.tip=temp;
    setbillAmount({...obj});
   }
   const MemberHandler=(e)=>{
    let temp=e.target.value;
    let obj=billAmount;
    temp=parseInt(temp);
    obj.numberOfDin=temp;
    setbillAmount({...obj});
   }
   const calc=()=>{

let bill=billAmount.bill;
let tip=billAmount.tip;
let n=billAmount.numberOfDin;
let ans=0;

if(tip===1){
let tem=2/100;
ans=(bill*tem)/n;
ans=parseInt(ans);
setOut(ans);
}
else if(tip===2){
  let tem=5/100;
ans=(bill*tem)/n;
ans=parseInt(ans);
setOut(ans);
}
else if(tip===3){
  let tem=10/100;
ans=(bill*tem)/n;
ans=parseInt(ans);
setOut(ans);
}
else if(tip===4){
  let tem=12/100;
ans=(bill*tem)/n;
ans=parseInt(ans);
setOut(ans);
}
else if(tip===5){
  let tem=15/100;
ans=(bill*tem)/n;
ans=parseInt(ans);
setOut(ans);
}
else{
  setOut(0);
  setMessage('Invalid input');
}


   }
   const Refresh=()=>{
setOut(0);
setMessage('');
setbillAmount({bill:0,tip:0,numberOfDin:0});
   }
   
  return (
    <div className="Main">
      <div className="head">
      <h1>Tip Calculator</h1>
      </div>
      <div className='inputs'>

        <label>Enter the total bill amount</label>
   <input type="number" value={billAmount.bill} onChange={BillAmountHandler}/>
   <br />
   <label>Enter the rating(1 to 5 [1=2%, 2=5%, 3=10%,4=12%, 5=15%])</label>
   <input type="number" value={billAmount.tip} onChange={RatingHandler}/>
   <br />
   <label>Enter the number of person sharing billAmount</label>
   <input type="number" value={billAmount.numberOfDin} onChange={MemberHandler}/>
   <br />
   </div>
  <div className="end">
   <button className="btn-push" onClick={calc}>Calculate Tip</button>
   <button className="btn-push" onClick={Refresh}>Refresh</button>
   <label>Tip Amount per person</label>
   <input value={message+out}  readOnly/>
   <br />
   </div>
    </div>
  );
}

export default Tipcalculator;
