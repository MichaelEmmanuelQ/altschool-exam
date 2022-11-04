import React, {useState} from "react"
import useCounter from "./hooks/useCounter"
import "./App.css";


function App() {

  const [value, action] = useCounter(),
        [error, setError] = useState("");

  return (
    <>
       
        <div className="counter-container glass">
       
        <div className="bio"> 
        <p className="altschool">altschool examination project</p>
        <p>Presented By : michael emmanuel </p>
        
        </div>

          {error !== ""? <div className="err">
            <p>{error}</p>
          </div>: null}

          <div className="counter">
            <button className="counter-btn decrement-button" onClick={()=>{

              parseInt(value) === 0? setError("404 error"): action({type: "subtract"});
              
              
              
              
              }}>-</button>

            <input type="number" className="counter-value" value={value} onChange={(e)=>{
              // e.persit();
              var newValue = "0";

              parseInt(value) === 0? newValue = e.target.value.toString().slice((e.target.value.toString().length - 1), ) : newValue = e.target.value;

              action({type: "setValue", payload: newValue === ""? "0": newValue})

            }} />

            <button className="counter-btn increment-button" onClick={()=>{

              setError("");
              
              action({type: "add"})
              
              }}
              
              >+</button>
          </div>

          <div className="counter-actions">
            <button className="counter-action-btn reset-btn" onClick={()=>{action({type: "reset"})}}>Reset</button>
          </div>
          <p className="note"> <span>Note</span> : That when the count is less than 0, an error page pops up</p>
        </div>

    </>
  );
}

export default App;
