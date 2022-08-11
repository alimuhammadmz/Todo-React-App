import { useState  ,useEffect } from 'react'
import reactLogo from './assets/react.svg'

import HelloComponent from './Components/helloComponent';
import NoteComponent from './Components/noteComponent';

function App() {
  const colorScheme = ["pink", "blue", "gray", "yellow"];
  const [color, setColor] = useState(0);
  const [note, setNote] = useState("");
  const [show, setShow] = useState(false)
  var tmp = "";

  useEffect(()=>{
    console.log("Color changed!");
  }, [color])

  useEffect(()=>{

    console.log("nOTE MDIFIED!");
  }, [note,show])  

  function changeColor (){
    setColor((color+1) % 4)
  }

  function renderItem(){
    // console.log(show)
    // if(show == "1"){
    //   setShow("0");
    //   return (<NoteComponent note={note}/>)
    // }
    // return null

  }

  return (
    <div style={{backgroundColor : colorScheme[color]}} className="w-100">
      <div>
        <HelloComponent msg="Default note" />
        <button onClick={changeColor}>Change Note Color</button>
      </div>

      <div>
        <input onChange={(e)=>{   
          tmp = e.target.value;
        }} type="text"/>

        <button onClick={()=>{    
          if(tmp!="" && note!=tmp){
            setNote(tmp);
            setShow(true);
          }
        }}>Save Note</button>
      </div>
      
      <br /><br />
      <button onClick={()=>{    
          setNote("");
          setShow(false);
      }}>Remove Note</button>

      {show ? <NoteComponent note={note}/> : null}
    </div>

  )
}

export default App;