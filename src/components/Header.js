import { useState } from "react";
import { Link } from "react-router-dom";
//import Logo from '../assets/img/foo'
const loggedInUser = () =>{
    // API call to check authentication
    return true;
}
const Title = () => (
    <Link to="/">
    <img
     className="logo"
     alt="logo" 
     src="https://yt3.googleusercontent.com/ytc/AL5GRJXudT76175T4x4n7eslWM1YkgNLHDSSqfXGoadl=s900-c-k-c0x00ffffff-no-rj"
    /> 
    </Link>
    );
   
   const Header = () => {
    const [isLoggedIn,setLoggedIn] = useState(false);

     return (
        <div className="header">
          
            <Title/>
           <div  className="nav-items">
           <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
            <li><Link to="/cart">Cart</Link></li>
           </ul>
           </div>
            {
                isLoggedIn ? ( <button onClick={() =>setLoggedIn(false)}>Logout</button> ) : 
                ( <button onClick={() =>setLoggedIn(true)}>Login</button> )
            }
        </div>
    );
   };
   export default Header;