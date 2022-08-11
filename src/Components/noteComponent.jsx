import React from 'react'

function noteComponent(props) {
  console.log(props.note);
  return (
    <h1>{props.note}</h1>
  )
}

export default noteComponent