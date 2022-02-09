const ball= document.getElementById('ball');
const sidebtn= document.getElementById('sidebtn');
const topbottom= document.getElementById('topbottom');
const colorbtn= document.getElementById('colorbtn');
let colors=  ['red','blue','yellow','orange','purple','white', 'green','magenta'];

let positionX = 0;
let positionY = 0;
let velocity = 100;
let reverse = false;


const moveBallX = () => { 

  let= Xmin = 0;
  let= Xmax = window.innerWidth;
 

  if (reverse) {
    positionX = positionX - velocity;
    ball.style.left = positionX + "px";
  } else {
    positionX = positionX + velocity;
    ball.style.left = positionX + "px";
  }

  if (positionX > Xmax || positionX === Xmin){
    reverse = !reverse;
  }
}
sidebtn.addEventListener('click',()=>{
 
  setInterval(moveBallX, 100);
})
const moveBallY = ()=>{

  let Ymin= 0;
  let= Ymax= window.innerHeight;
  
  if (reverse) {
      positionY= positionY - velocity;
      ball.style.top = positionY + "px";
    } else {
      positionY = positionY + velocity;
      ball.style.top = positionY + "px";
  }
  
      if (positionY > Ymax || positionY === Ymin){
      reverse = !reverse;
    }
  }
  topbottom.addEventListener('click', ()=>{
     setInterval(moveBallY, 100);
  })

colorbtn.addEventListener('click',()=>{
//makes random colors from array
  let randomColor= colors[Math.floor(Math.random()*colors.length)];
  let container= document.getElementById('ball');
  
  container.style.background= randomColor;
})
