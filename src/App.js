import './App.css';
import { useState } from "react";

function App() {

  const [weight,setWeight]=useState();
  const [height,setHeight]=useState();
  const [bmi,setBmi]=useState('');
  const [message,setMessage]=useState('');

  function res(){
    setHeight(0)
    setBmi('')
    setWeight(0)
    setMessage('')
  }

  let cal=(e)=>{
    e.preventDefault();
    if(weight==0){
      alert("please enter valid weight!");
    }
    else if(height==0){
      alert("please enter valid height!");
    }else{
      let bmi=(weight/(height*height))
      setBmi(bmi.toFixed(2));
      
      if(bmi<24.9 && bmi>=18.5){
        setMessage('Normal Weight!');
      }else if(bmi>=24.9 && bmi<29.9){
        setMessage("You are overweight!");
      }else if(bmi>=29.9 && bmi<39.9){
        setMessage("Obesity level 1");
      }else if(bmi<18.5){
        setMessage("Underweight! You should see your doctor.");
      }
    }
    
  }


  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form action="" onSubmit={cal}>
        <div className="form">

        <div className="weight">

          <label htmlFor="">Weight (kg):</label>
          <input type="text" placeholder="Enter weight" value={weight} onChange={(e)=>setWeight(e.target.value)}/>
        </div>
        <div className="height">

          <label htmlFor="">height (m):</label>
          <input type="text" placeholder="Enter height" value={height} onChange={(e)=>setHeight(e.target.value)}/>
        </div>
        <div className="submit">
          <button type="submit">Calculate</button>
        </div>
        <div className="msg">
          <h3>Your BMI:{bmi}</h3>
          <h4>{message}</h4>
        </div>
        </div>
        </form>
        <input type='Reset' className='reset' onClick={res}/>
      </div>

    </div>
  );
}

export default App;
