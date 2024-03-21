
import React, { useState } from 'react';
import './App.css';
import Box from './component/Box';

const userItem = {
  rock:{
    name: 'rock',
    text: '🤜',
  },
  scissor:{
    name: 'scissor',
    text: '👉',
  },
  paper:{
    name: 'paper',
    text: '🫱',
  },
}

const comItem = {
  rock:{
    name: 'rock',
    text: '🤛',
  },
  scissor:{
    name: 'scissor',
    text: '👈',
  },
  paper:{
    name: 'paper',
    text: '🫲',
  },
}

function App() {
  const [userSelect,setUserSelet] = React.useState(null);
  const [comSelect, setComSelect] = React.useState(null);
  const [resultSelect, setResultSelect] = React.useState(null);
  const Play = (userChoice) => {
    setUserSelet(userItem[userChoice]);
    let randomNum = randoms();
    setComSelect(comItem[randomNum]);
    setResultSelect(judgment(userItem[userChoice],comItem[randomNum]));
  }

  const randoms = () => {
    let randomArray = Object.keys(comItem);
    let num = Math.floor(Math.random()*randomArray.length);
    return (randomArray[num]);
  }

  const judgment = (user,computer) => {
    if (user.name === computer.name) {
      return 'TIE'
    } else if (user.name === 'rock') return computer.name === 'scissor'?'WIN':'LOSE'
    else if (user.name === 'scissor') return computer.name === 'paper'?'WIN':'LOSE'
    else if (user.name === 'paper') return computer.name === 'rock'?'WIN':'LOSE'
  }

  return (
    <div className='main'>
      <div className='box-container'>
        <Box title='YOU' item={userSelect} result={resultSelect}/>
        <Box title='COMPUTER' item={comSelect} result={resultSelect}/>
      </div>
      <div>
        <button onClick={()=>Play('rock')}>✊</button>
        <button onClick={()=>Play('scissor')}>✌️</button>
        <button onClick={()=>Play('paper')}>🖐️</button>
      </div>
    </div>
  );
}

export default App;
