import React from 'react'

const Box = (props) => {
    let result;
    if (props.title === 'COMPUTER' && props.result !== 'TIE' && props.result !== '' && props.result !== null) {
        result=props.result === 'WIN'?'LOSE':'WIN'
    } else {
        result = props.result;
    }
  return (
    <div className={`box ${result}`}>
      <h1>{props.title}</h1>
      <span className={`${props.viewHidden}`}>{props.viewItem}</span>
      <span>{props.item && props.item.text}</span>
      <h1>{result === ''?'CHOOSE':result}</h1>
    </div>
  )
}

export default Box
