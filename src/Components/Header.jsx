import { NavLink } from "react-router-dom";

export default function Headers (){
  return (
    <div className="Headers">
        <h1>hey</h1>
        <NavLink to="/about">About</NavLink>
        {/* <div className="headers_div"></div>
        <div></div> 
        <div></div> 
        <div></div> */}
    </div>
  )
}