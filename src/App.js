import { useState } from 'react';
import './style.css';
import ParticleComponent from './Components/ParticleComponent';
import Board from './Components/Board';

function App() {
  const [result, setResult] = useState("0");
  const [error,setError] = useState("");
  const [history,setHistory] = useState("");

  const square = () =>{
    let temp = result*result;
    if(isNaN(temp)){
      setError("cannot perform square operation");
      return;
    }
    setResult(temp.toString());
  }

  const cube = () =>{
    let temp = result*result*result;
    if(isNaN(temp)){
      setError("cannot perform cube operation");
      return;
    }
    setResult(temp.toString());
  }

  const root = () =>{
    let temp = Math.sqrt(result);
    if(isNaN(temp)){
      setError("cannot perform root operation");
      return;
    }
    setResult(temp.toString());
  } 

  const clear = () =>{
    setResult("0");
    setError("");
    setHistory("")
  }

  const numberInput = (num) =>{
    setError("");
    //if result contain 0 at the beginning, remove the 0 number and add the corresponding input
    if(result==="0"){
      setResult(num);
      return;
    }
    //if number is greater than 23 , as it overlaps the div element, we stop the input number after it.
    if(result.length>15) return;
    setResult(prev=>prev+num);
  }

  const pointInput = () =>{
    setError("");
    const [split,tempOperator] = splitOperator();
    //if there is already an operator present
    if(tempOperator!==""){
      //if there is no operand after the operator, add 0.
      if(split[1]===""){
        setResult(prev=>prev+"0.");
        return;
      }
      //if there is operand after the operator, just add . after the second operand
      if(!split[1].includes(".")) setResult(prev=>prev+".");
      return;
    }
    if(!result.includes("."))  setResult(prev=>prev+".");
  }

  const operatorInput = (type) =>{
    setError("");
    //if there is a number 0 only in the input, return nothing because we do not want to add operator
    if(result==="0") return;
    //checking if there is an operator present in the result string.
    if(result.includes("+")||result.includes("-")||result.includes("x")||result.includes("/")){
      let res = equal();
      //if there is already a operator present but not two numbers between
      //example = 99*,24+,10-,24/
      if(res==="a"){
        let res = result.substr(0,result.length-1);
        setResult(res+type);
        return;
      }
      //if there is already a operator present and numbers between are present
      //return the operated number and include the new operator in it.
      setResult(res+type);
      return;
    }
    //if there is not operator present, just simply add the operator
    setResult(prev=>prev+type)
  }

  const splitOperator = () =>{
    let split = [];
    let tempOperator = "";
    //check if there is operator present
    if(result.includes("+")) {
      split = result.split("+");
      tempOperator = "+";
    }
    if(result.includes("-")) {
      split = result.split("-");
      tempOperator = "-";
    }
    if(result.includes("/")) {
      split = result.split("/");
      tempOperator = "/";
    }
    if(result.includes("x")) {
      split = result.split("x");
      tempOperator = "x";
    }
    return [split,tempOperator];
  }

  const equal = () =>{
    setError("");
    //destructuring the result
    const [split,tempOperator] = splitOperator();

    //if there is no multiple operands return notheing.
    if(split[1]===""){
      return "a";
    }

    let calculate = 0;
    //Do the calculation based on the operator;
    switch(tempOperator){
      case "+":
        calculate = parseFloat(split[0])+parseFloat(split[1]);
        break;
      case "-":
        calculate = parseFloat(split[0])-parseFloat(split[1]);
        break;
      case "x":
        calculate = parseFloat(split[0])*parseFloat(split[1]);
        break;
      case "/":
        calculate = parseFloat(split[0])/parseFloat(split[1]);
        break;
        default:
    }
    //set the new calculated value to result while converting it to string.
    setHistory(result);
    setResult(calculate.toString());
    return calculate.toString();
  }

  return (
    <div className="Main">
  
        <ParticleComponent />
        <Board 
          result={result} 
          error={error}
          history={history}
          square={square}
          cube={cube}
          root={root}
          clear={clear}
          numberInput={numberInput}
          pointInput={pointInput}
          operatorInput={operatorInput}
          equal={equal}
        />        

    </div>
  );
}



export default App;
