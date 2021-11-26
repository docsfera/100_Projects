import logo from './logo.svg';
import {useState} from 'react'
import './App.css';
import classNames from "classnames";

function App() {

    const inititalNameError = "Let's Start!"

    const [value, setValue] = useState(null)
    const [nameError, setNameError] = useState(inititalNameError)

    const binToDec = bin => {
        setNameError("");

        //(value === null) && setNameError("Let's Start!")

        if(bin.length > 8){
            setNameError("Too long")
        }else{
            return [].reduce.call(bin, (pv, cv, i) => {
                (isNaN(Number(cv)) || +cv > 1) && setNameError("Incorrect")
                return pv + Math.pow(2, bin.length - i - 1) * cv
            }, 0)
        }
    }

  return (
    <div className="App">
      <div className="App-header border-10 border-white rounded">
        <h3>Bin2Dec</h3>
          <input className= {classNames('form-control',
              { 'bg-danger': nameError.length && nameError !== inititalNameError})}
                 onChange={e => setValue(binToDec(e.target.value))} />
          <p className="value-shower">{(nameError) ? nameError : value}</p>
      </div>
    </div>
  );
}

export default App;
