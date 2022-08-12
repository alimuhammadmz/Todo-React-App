import {useState, useEffect } from 'react'
import HelloComponent from './Components/helloComponent'
import NoteComponent from './Components/noteComponent'

function App() {
  const colorScheme = ["pink", "blue", "gray", "yellow"]
  const [color, setColor] = useState(0)

  const [note, setNote] = useState("")
  const [show, setShow] = useState(false)
  const [update, setUpdate] = useState(false)

  const [listNotes, setListNotes] = useState([])
  const [takeNotes, setTakeNotes] = useState("")

  useEffect(()=>{
    console.log("Color changed!");
  }, [color])

  useEffect(()=>{
    console.log("Note Modified!");
  }, [note, show, update, takeNotes])  

  function changeColor (){
    setColor((color+1) % 4)
  }

  function updateNote(){
    console.log("fmdjf")
    setUpdate(true)
  }


  function updateList(msg) {
    setListNotes([...listNotes, msg]);
  }

  return (
    <div style={{backgroundColor : colorScheme[color]}} className="w-100">
      <div>
        <HelloComponent msg="Default note" />
        <button onClick={changeColor}>Change Note Color</button>
      </div>

      <div>
        <input value={takeNotes} onChange={(e)=>{
          setTakeNotes(e.target.value);
        }} type="text"/>

        <button onClick={()=>{
          setUpdate(false);
          if(takeNotes=="" && takeNotes!=note){
            alert("Note can't be set to empty!")
          }else if(takeNotes==note){
            alert("Already exists!")
          }else{
            setNote(takeNotes);
            updateList(takeNotes)
            setTakeNotes("");
            setShow(true);
          }
        }}>Save Note</button>
      </div>
      
      <br /><br />
      <button onClick={()=>{    
        var tmpList = [...listNotes];
        tmpList.pop();
        setListNotes([...tmpList]);
        setShow(false);
      }}>Remove Last Note</button>

      <div >
        {<NoteComponent notes={listNotes}/>}
      </div>

      

    </div>
  )
}

export default App;