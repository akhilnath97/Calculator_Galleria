import React,{useState} from "react";
import "./Home.css";
import {Link} from "react-router-dom";

const Home=()=>{
    


    return(
<nav className="Homepage">
    <h1>Calculator Galleria</h1>
<ul className="Home-urls">
    <Link className="Link" to='/Calculator'>
    <li>Calculator</li>
    </Link>
    <Link className="Link" to='/TIP'>
    <li>Tip Calculator</li>
    </Link>
    <Link className="Link" to='/BMI'>
    <li>BMI Calculator</li>
    </Link >
    <Link className="Link" to='/Counter'>
    <li>Counter</li>
    </Link>
    <Link className="Link" to='/About'>
    <li>About</li>
    </Link>
</ul>

</nav>

    );
}




export default Home;