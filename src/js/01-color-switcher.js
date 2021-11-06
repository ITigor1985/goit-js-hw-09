const btnStart = document.querySelector("button[data-start]");
const btnStop = document.querySelector("button[data-stop]");
const bodyEl = document.querySelector("body");
let timerId=null;

const startChangesBodyColor = () =>{
    // if(timerId){ 
    //     return
    // }
  timerId =  setInterval(()=>{bodyEl.style.backgroundColor = `${getRandomHexColor()}`},1000);
  btnStart.setAttribute("disabled", true);
}
const stopChangesBodyColor = () =>{
    clearInterval(timerId);
    btnStart.removeAttribute("disabled");
    timerId=null;
  }

btnStart.addEventListener('click',startChangesBodyColor);
btnStop.addEventListener('click',stopChangesBodyColor);

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }