'use strict';
export default class PopUp{

  constructor(){
    this.popUp = document.querySelector('.pop-up');
    this.popUpRefresh = document.querySelector('.pop-up__refresh');
    this.popUpMessage = document.querySelector('.pop-up__message');
    this.popUpRefresh.addEventListener('click',()=>{
      this.onClick && this.onClick();
      this.hide();
    });
  }

  setClickListener(onClick){
    this.onClick = onClick;
  }
  hide(){
    this.popUp.classList.add('pop-up--hide');
  }
  showWithText(text){
    this.popUpMessage.innerText = text;
    this.popUp.classList.remove('pop-up--hide');
  }
}