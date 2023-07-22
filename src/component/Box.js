import React from 'react'

const Box = (proms) => {
  return (
    <div className={`box ${proms.result=="tie"?'box-tie':proms.result=="win"?'box-win':'box-lose'}`}>
        <h1>{proms.user}</h1>
        <img src={proms.choice&&proms.choice.imgUrl}></img>
        <h2>{proms.result}</h2>
    </div>
  )
  
}
export default Box
