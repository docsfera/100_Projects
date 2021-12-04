import './App.css';
import {useRef} from 'react';

function App() {

  let textareaRef = useRef(null)
  let evalStr = ""

  const writeChar = (a, isChar = false) => {
      let maxLength
      (isChar) ? maxLength = 9 : maxLength = 8
    if(textareaRef.current && textareaRef.current.value.length < maxLength){
        textareaRef.current.value += a
        if(isChar){
            evalStr = textareaRef.current.value
            textareaRef.current.value = ""
        }
    }
    if(textareaRef.current.value.length > 8){
        textareaRef.current.classList.add('error')
    }

  }

    var regInteger = /^-?\d+$/;

    function isInteger( str ) {
        return regInteger.test( str );
    }

  const deleteChar = () => {
      if(textareaRef.current){
          if(isInteger(textareaRef.current.value)){
              textareaRef.current.value = textareaRef.current.value.slice(0, -1)
          }else{
              evalStr = evalStr.slice(0, -1)
              textareaRef.current.value = evalStr
          }

      }
  }

  const clearDisplay = () => {
      if(textareaRef.current){
          textareaRef.current.value = ""
          textareaRef.current.classList.remove('error')
      }
  }

  const getResult = () => {
      if(textareaRef.current && evalStr && !isInteger(evalStr)){
          evalStr += textareaRef.current.value
          try{
              textareaRef.current.value = eval(evalStr)
          }catch{
              textareaRef.current.classList.add('error')
              textareaRef.current.value = "ERROR"
          }

          evalStr = ""
      }
  }

console.log(eval("5.5 + 6"))
    console.log(isInteger(11.5))



  return (
    <div className="App">
      <div className="calculator">
        <input ref={textareaRef} className="display" disabled></input>
        <div className="buttons">
          <div className="button clear" onClick={clearDisplay}>AC</div>
          <div className="button clear" onClick={deleteChar}>C</div>
          <div className="button clear"> </div>
          <div className="button char" onClick={() => writeChar("/", true)}>/</div>

          <div className="button" onClick={() => writeChar(1)}>1</div>
          <div className="button" onClick={() => writeChar(2)}>2</div>
          <div className="button" onClick={() => writeChar(3)}>3</div>
          <div className="button char" onClick={() => writeChar("*", true)}>*</div>

          <div className="button" onClick={() => writeChar(4)}>4</div>
          <div className="button" onClick={() => writeChar(5)}>5</div>
          <div className="button" onClick={() => writeChar(6)}>6</div>
            <div className="button char" onClick={() => writeChar("-", true)}>-</div>

          <div className="button" onClick={() => writeChar(7)}>7</div>
          <div className="button" onClick={() => writeChar(8)}>8</div>
          <div className="button" onClick={() => writeChar(9)}>9</div>
          <div className="button char" onClick={() => writeChar("+", true)}>+</div>

            <div className="button"> </div>
          <div className="button" onClick={() => writeChar(0)}>0</div>
          <div className="button" onClick={() => writeChar(".")}>.</div>

            <div className="button char" onClick={getResult}>=</div>


        </div>
      </div>
    </div>
  );
}

export default App;
