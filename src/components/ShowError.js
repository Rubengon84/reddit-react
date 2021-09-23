import React from "react";
import warningImg from "../images/alert_256x256.png";


export const HasError = () => {

  return(
    <div id="error">
      <img id="imgError" src={warningImg} alt="Warning imagen of Something went Wrong" />
      <div id="errorText">
        <h2>WHOOOPS!!!! SOMETHING WENT WRONG</h2> 
        <h4>PLEASE CHECK YOUR CONNECTION OR THE SERVER MIGHT BE OUT OF SERVICE</h4>
      </div>
    </div>
  )
};

export default HasError;