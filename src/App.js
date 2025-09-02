const messages = [
  "Learn React *",
  "Apply for jobs",
  "Invest your income", 
];

export default function App(){
  
  let step = 2;
  function handlePrev(){
    {step>0 ? step= step-1 : step = step+0}
    console.log(step);
  }
  function handleNext(){
    {step<4 ? step= step+1 : step = step+0}
    console.log(step);
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