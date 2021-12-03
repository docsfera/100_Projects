import './App.css';
import styled from 'styled-components';
import {useState} from 'react'

const InputComponent = styled.input`
    position: absolute;
    width: 20px;
    height: 10px;
    
    ${props => props.bottom && "bottom:-15px"};
    ${props => props.left && "left:-50px"};
    ${props => props.top && "top:-15px"};
    ${props => props.right && "right:-50px"};
  `;

const AppComponent = styled.textarea`
        background-color: #FAFAFC;
        width: 300px;
        height: 150px;
        resize: none;
      `;

const BorderBox = styled.div`
  
  border-top-left-radius: ${props => props.radiuses.a || 0}px;
    border-top-right-radius: ${props => props.radiuses.b || 0}px;
    border-bottom-left-radius: ${props => props.radiuses.c || 0}px;
    border-bottom-right-radius: ${props => props.radiuses.d || 0}px;
  
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    background-color: #E9EAEE; 
    
    width: 100%;
    height: 100%;
  `;
// margin-left:calc(50% - 225px);
// margin-top: calc(50% - 350px - 175px);
const Centering = styled.div`
    position: absolute;
    top: calc(50% - 225px);
    left: calc(50% - 175px);
    
    width: 450px;
    height: 350px;
  `;

function App() {
    const [radiuses, setRadiuses] = useState({a:0, b:0, c:0, d:0})

    let string = `border-top-left-radius: ${radiuses.a}px\nborder-top-right-radius: ${radiuses.b}px\nborder-bottom-left-radius: ${radiuses.c}px\nborder-bottom-right-radius: ${radiuses.d}px`
    const replayLetters = (str) => str.replace(/[^\d]/g,'')

  return (
      <Centering>
          <InputComponent onKeyUp={e => e.target.value = replayLetters(e.target.value)} bottom left placeholder={radiuses.c} onBlur  = {(e) => setRadiuses({...radiuses, c: e.target.value})}></InputComponent>
          <InputComponent onKeyUp={e => e.target.value = replayLetters(e.target.value)} top left placeholder={radiuses.a} onBlur  = {(e) => setRadiuses({...radiuses, a: e.target.value})}></InputComponent>
          <InputComponent onKeyUp={e => e.target.value = replayLetters(e.target.value)} top right placeholder={radiuses.b} onBlur  = {(e) => setRadiuses({...radiuses, b: e.target.value})}></InputComponent>
          <InputComponent onKeyUp={e => e.target.value = replayLetters(e.target.value)} bottom right placeholder={radiuses.d} onBlur  = {(e) => setRadiuses({...radiuses, d: e.target.value})}></InputComponent>

          <BorderBox radiuses={radiuses}>
              <AppComponent value={string} disabled>

              </AppComponent>
          </BorderBox>
      </Centering>
  );
}

export default App;