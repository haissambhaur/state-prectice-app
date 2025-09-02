import { useState } from "react";

const messages = [
  "Learn React *",
  "Apply for jobs",
  "Invest your income", 
];

export default function App(){
  const [step, setStep] =useState(1)
  
  //let step = 2;
  function handlePrev(){
    setStep(step > 1 ? step - 1 : step);
  }
  function handleNext(){
    setStep(step < 3  ? step + 1 : step);
  }
  return <div className="steps">
    <div className="numbers">
      <div className={`${step >= 1? "active": ""}`}>1</div>
      <div className={`${step >= 2? "active": ""}`}>2</div>
      <div className={`${step >= 3? "active": ""}`}>3</div>
    </div>
    <p className="message"> 
      Step {step}: {messages[step -1]}
    </p>
    <div className="buttons">
      <button style={{background:"#7950f2", color:"#ffff"}} onClick={() => handlePrev()}>previous</button>
      <button style={{background:"#7950f2", color:"#ffff"}} onClick={() => handleNext()}>
        next
      </button>
    </div>
    </div>
}