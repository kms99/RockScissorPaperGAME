import React from 'react'

const Box = (props) => {
    let result;
    if (props.user==="COM" && props.result!=="tie" && props.result!==""){
        result = props.result ==="win" ? "lose":"win";
    }else{
        result = props.result;
    }

  return (
    <div className={`box ${result}`}>
        <h1>{props.user}</h1>
        <img src={props.choice&&props.choice.imgUrl}></img>
        <h2>{result}</h2>
    </div>
  )
  
}
export default Box
