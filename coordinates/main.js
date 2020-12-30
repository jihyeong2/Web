const vertical = document.querySelector('.vertical')
const horizontal = document.querySelector('.horizontal')
const target = document.querySelector('.target')
const tag = document.querySelector('.tag')

addEventListener('load', ()=>{
  const targetRect = target.getBoundingClientRect();
  const targetHalfWidth = targetRect.width/2;
  const targetHalfHeight = targetRect.height/2;

  document.addEventListener('mousemove',(event)=>{
    console.log(`${event.clientX}, ${event.clientY}`)
    const x = event.clientX;
    const y= event.clientY;
    vertical.style.transform = `translateX(${x}px)`
    horizontal.style.transform = `translateY(${y}px)`
    target.style.transform= `translate(${x-targetHalfWidth}px, ${y-targetHalfHeight}px)`
    tag.style.transform = `translate(${x}px, ${y}px)`

    // target.style.left = `${x}px`;
    // target.style.top = `${y}px`;
    // tag.style.left = `${x}px`;
    // tag.style.top = `${y}px`;
    tag.textContent = `${x}px, ${y}px, `
})
})