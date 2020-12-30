export default class Game {
  constructor(gameDuration, carrotCount, bugCount){
    this.gameDuration= gameDuration;
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;
    
    const gameBtn = document.querySelector('.game__button');
    const gameTimer = document.querySelector('.game__timer');
    const gameScore = document.querySelector('.game__score');

    let started = false;
    let score = 0;
    let timer = undefined;
  }

}