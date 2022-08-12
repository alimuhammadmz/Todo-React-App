import React from 'react'

function noteComponent(notesList) {     //notes is prop
  return notesList.notes.map((note) => {
    
    return (
      <div>
        <ul> 
          <li>
            <h2>{note}</h2>
          </li>
        </ul>
      </div>
    );
 });
}

export default noteComponent