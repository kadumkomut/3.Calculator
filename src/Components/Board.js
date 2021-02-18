const Board = (props) =>{
    return (
        <div className="board">
        
            {/* <div className="error">
                
            </div> */}

            <div className="inputbox">
              <div>
                <span className="result">{props.result}</span>
                <span className="error">{props.error||props.history}</span>
              </div>
            </div>
            
            
            <div className="button">
              
              <button className="extra" onClick={props.square}>x²</button>
              <button className="extra" onClick={props.cube}>x³</button>
              <button className="extra" onClick={props.root}>√</button>
              <button className="operator" onClick={()=>props.operatorInput("/")}>÷</button>
  
              <button className="number" onClick={()=>props.numberInput("7")}>7</button>
              <button className="number" onClick={()=>props.numberInput("8")}>8</button>
              <button className="number" onClick={()=>props.numberInput("9")}>9</button>
              <button className="operator" onClick={()=>props.operatorInput("x")}>×</button>
  
              <button className="number" onClick={()=>props.numberInput("4")}>4</button>
              <button className="number" onClick={()=>props.numberInput("5")}>5</button>
              <button className="number" onClick={()=>props.numberInput("6")}>6</button>
              <button className="operator" onClick={()=>props.operatorInput("-")}>-</button>
  
              <button className="number" onClick={()=>props.numberInput("1")}>1</button>
              <button className="number" onClick={()=>props.numberInput("2")}>2</button>
              <button className="number" onClick={()=>props.numberInput("3")}>3</button>
              <button className="operator" onClick={()=>props.operatorInput("+")}>+</button>
  
              <button className="number" onClick={()=>props.numberInput("0")}>0</button>
              <button className="operator" onClick={props.pointInput}>.</button>
              <button className="number" onClick={props.equal}>=</button>
              <button className="clear" onClick={props.clear}>C</button>
  
            </div>
  
        </div>
    );
  }

  export default Board;