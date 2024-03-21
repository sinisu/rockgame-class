import React, { Component } from 'react'
import './App.css';
import Box from './component/Box'

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

const viewChange = ['✊','✌️','🖐️',]

export default class AppClass extends Component {
    constructor() {
        super()
        this.state={
            userSelect: null,
            comSelect: null,
            resultSelect:"",
            viewIndex:0,
            hiddenSelect:"",
            viewSelect:viewChange[0],
        };
    }

    componentDidMount() {
      let viewNumber = this.state.viewIndex;
      viewNumber= setInterval(()=>{
        if(viewNumber<2){
          viewNumber=viewNumber+1;
        } else {
          viewNumber=0;
        }  this.setState({
        viewIndex:viewNumber,
        viewSelect:viewChange[this.state.viewIndex],
        })
      },500)
    }

    Play = (userChoice) => {
        let randomNum = this.randoms();
        this.setState({
            userSelect:userItem[userChoice],
            comSelect:randomNum,
            resultSelect:this.judgment(userItem[userChoice],randomNum),
            hiddenSelect:"hidden",});        
    }

    randoms = () => {
        let randomArray = Object.keys(comItem);
        let num = Math.floor(Math.random()*randomArray.length);
        let final = randomArray[num]
        return (comItem[final]);
  }

    judgment = (user,computer) => {
        if (user.name === computer.name) {
            return 'TIE'
        } else if (user.name === 'rock') return computer.name === 'scissor'?'WIN':'LOSE'
        else if (user.name === 'scissor') return computer.name === 'paper'?'WIN':'LOSE'
        else if (user.name === 'paper') return computer.name === 'rock'?'WIN':'LOSE'

  }

  render() {
    return (
        <div className='main'>
            <div className='box-container'>
                <Box title='YOU' item={this.state.userSelect} result={this.state.resultSelect} viewItem={this.state.viewSelect} viewHidden={this.state.hiddenSelect}/>
                <Box title='COMPUTER' item={this.state.comSelect} result={this.state.resultSelect} viewItem={this.state.viewSelect} viewHidden={this.state.hiddenSelect}/>
            </div>
            <div>
                <button onClick={()=>this.Play('rock')}>✊</button>
                <button onClick={()=>this.Play('scissor')}>✌️</button>
                <button onClick={()=>this.Play('paper')}>🖐️</button>
            </div>
        </div>
    );
  }
}
