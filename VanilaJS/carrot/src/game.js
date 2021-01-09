'use strict';
import { Field, ItemType } from './field.js';
import * as sound from './sound.js';

export const Reason = Object.freeze({
  win: 'win',
  lose: 'lose',
  cancel: 'cancel',
})

//builder Pattern
// 오브젝트 생성 시 Builder Pattern을 이용해서
// 간단 명료하게 만들 수 있음.
export class GameBuilder {
  gameDuration(duration){
    this.gameDuration = duration;
    return this;
  }
  carrotcount(num){
    this.carrotcount=num;
    return this;
  }
  bugcount(num){
    this.bugcount=num;
    return this;
  }
  build(){
    return new Game(
      this.gameDuration,
      this.carrotcount,
      this.bugcount
    )
  }
}

class Game {
  
  constructor(gameDuration, carrotCount, bugCount){
    this.gameDuration= gameDuration;
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;

    this.gameTimer = document.querySelector('.game__timer');
    this.gameScore = document.querySelector('.game__score');
    this.gameBtn = document.querySelector('.game__button');

    this.gameBtn.addEventListener('click', ()=>{
      if(this.started){
        this.stop(Reason.cancel);
      }
      else{
        this.start();
      }
    })
    this.gameField = new Field(this.carrotCount, this.bugCount);
    this.gameField.setClickListener(this.onItemClick);

    this.started = false;
    this.score = 0;
    this.timer = undefined;
  }
  setGameStopListener(onGameStop){
    this.onGameStop = onGameStop;
  }
  start(){
    this.started=true;
    this.initGame();
    this.showStopButton();
    this.showTimerAndScore();
    this.startGameTimer();
    sound.playBackground();
  }
  
  stop(reason){
    this.started=false;
    this.stopGameTimer();
    this.hideGameButton();
    sound.stopBackground();
    this.onGameStop && this.onGameStop(reason);
  }

  onItemClick = (item)=>{
    if (!this.started) return;
    if(item === ItemType.carrot){
      this.score++;
      this.updateScoreBoard();
      if(this.score === this.carrotCount){
        this.stop(Reason.win);
      }
    }
    else{
      this.stop(Reason.lose);
    }
  };

  showStopButton(){
    const icon = this.gameBtn.querySelector('.fas');
    icon.classList.add('fa-stop');
    icon.classList.remove('fa-play');
    this.gameBtn.style.visibility= 'visible';
  }
  
  hideGameButton(){
    this.gameBtn.style.visibility= 'hidden';
  }
  
  showTimerAndScore(){
    this.gameTimer.style.visibility = 'visible';
    this.gameScore.style.visibility = 'visible';
  }
  
  startGameTimer(){
    let remaningTimeSec = this.gameDuration;
    this.updateTimerText(remaningTimeSec);
    this.timer = setInterval(()=>{
      if(remaningTimeSec <= 0){
        clearInterval(this.timer);
        this.stop(this.carrotCount === this.score ? Reason.win : Reason.lose);
        return;
      }
      this.updateTimerText(--remaningTimeSec);
    },1000);
  }
  
  stopGameTimer(){
    clearInterval(this.timer);
  }
  
  updateTimerText(time){
    const minutes = Math.floor(time/60);
    const seconds = time % 60;
    this.gameTimer.innerText = `${minutes}:${seconds}`
  }
  
  
  initGame(){
    this.score=0;
    this.gameScore.innerText = this.carrotCount;
    this.gameField.init();
  }
  
  
  updateScoreBoard(){
    this.gameScore.innerText = this.carrotCount - this.score;
  }
}