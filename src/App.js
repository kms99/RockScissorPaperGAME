import './App.css';
import Box from './component/Box'
import { useState } from 'react';

const gameUpdateValue = {
  scissors : {
    name : "Scissors",
    imgUrl : "https://play-lh.googleusercontent.com/sWgRFylbOR_lCBOkcouZA5undJFCJi2pzzOxuCE8uMvrDYyZGorHm2aBPCRowGH9OA=w240-h480-rw"
  },
  rock : {
    name : "Rock",
    imgUrl : "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png"
  },
  paper : {
    name : "Paper",
    imgUrl : "https://www.collinsdictionary.com/images/full/paper_111691001.jpg"
  }
}


function App() {
  const [userChoice,setUserChoice] = useState(null);
  const [comChoice,setComChoice] = useState(null);
  const [result,setResult] = useState("");
  const randomValueGen = () => {
    let randomNum = Math.floor(Math.random()*3);
    let randomCase = Object.keys(gameUpdateValue);
    return gameUpdateValue[randomCase[randomNum]];
  }
  const gameButtonClick = (event) =>{
    setUserChoice(gameUpdateValue[event.target.value]);
    let comValue = randomValueGen();
    setComChoice(comValue);
    setResult(gameLogic(gameUpdateValue[event.target.value], comValue));
  }

  const gameLogic = (user,com) =>{
    if (user.name==com.name){
      return "tie";
    } else if (user.name == "Rock"){
      return com.name == "Paper" ? "lose" : "win";
    } else if (user.name == "Scissors"){
      return com.name == "Rock" ? "lose" : "win";
    } else if (user.name == "Paper"){
      return com.name == "Scissors" ? "lose" : "win";
    }
  }
  return (
    <div className='main-container'>
      <div className='box-container'>
        <Box user="USER" choice={userChoice} result={result}/>
        <Box user="COM" choice={comChoice} result={result=="tie"?"tie":result=="win"?"lose":"win"}/>
      </div>
      <div>
        <button onClick={gameButtonClick} value={'scissors'}>가위</button>
        <button onClick={gameButtonClick} value={'rock'}>바위</button>
        <button onClick={gameButtonClick} value={'paper'}>보</button>
      </div>

      <h1>{result}</h1>
    </div>
  );
}
export default App;
