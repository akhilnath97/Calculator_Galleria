import React from "react";
import Calculator from "./Components/Calculator/calculator";
import BmiCalc from "./Components/BMIcalc/BmiCalc";
import Counter from "./Components/Counter/Counter"
import Tipcalculator from "./Components/TipCalc/tip"
import Home from "./Components/Home/Home";
import About from "./About"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  let about=()=>{
    <div>
        <h1>About Calculator Galleria</h1>
    </div>   
}
  return (
    
     <Router>
  
         <Home />  
        < Routes >    
       <Route path="/Calculator" element={<Calculator />} />
       <Route path="/BMI"  element={<BmiCalc />} />
       <Route path="/TIP"  element={<Tipcalculator />} />
       <Route path="/Counter"  element={<Counter />} />
       <Route path="/About"  element={<About />} />
       </Routes>  
     </Router>
   
  );
}

export default App;
