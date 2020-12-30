'use strict';
import * as sound from './sound.js';

const CARROT_SIZE=80;

export default class Field{

  constructor(carrotCount, bugCount){
    this.carrotCount = carrotCount;
    this.bugCount = bugCount;
    this.field = document.querySelector('.game__field');
    this.fieldRect = this.field.getBoundingClientRect();
    // this.onClick = this.onClick.bind(this);
    
    // this.field.addEventListener('click', (event) => this.onClick(event));
    // arrow function은 this에 클래스가 전달됨.
    
    this. field.addEventListener('click', this.onClick);
  }

  init(){
    this.field.innerHTML = '';
    this._addItem('carrot', this.carrotCount, 'img/carrot.png');
    this._addItem('bug', this.bugCount, 'img/bug.png');
  }

  onClick = (event) => {
    console.log('click');
    console.log(this.onItemClick);
    const target = event.target;
    if(target.matches('.carrot')){
      //.matches는 CSS 셀렉터가 맞으면 true
      target.remove();
      sound.playCarrot();
      this.onItemClick && this.onItemClick('carrot');
    }
    else if(target.matches('.bug')){
      this.onItemClick && this.onItemClick('bug');
    }
  }

  setClickListener(onItemClick){
    this.onItemClick = onItemClick;
    console.log(this.onItemClick);
  }

  _addItem(className,count,imgPath){
    const x1 = 0;
    const y1 = 0;
    const x2 = this.fieldRect.width - CARROT_SIZE;
    const y2 = this.fieldRect.height - CARROT_SIZE;
    for (let i=0; i< count; i++){
      const item = document.createElement('img');
      item.setAttribute('class',className);
      item.setAttribute('src',imgPath);
      item.style.position=  'absolute';
      const x = randomNumber(x1,x2);
      const y = randomNumber(y1,y2);
      item.style.left = `${x}px`;
      item.style.top = `${y}px`;
      this.field.appendChild(item);
    }
  }
}

function randomNumber(min,max){
  return Math.random() * (max-min) + min;
}