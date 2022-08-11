import React from 'react'

function helloComponent(props) {
  return (
    <div class="container fw-bold" style={{color: "whitesmoke"}}> {props.msg} </div>
  )
}

export default helloComponent;