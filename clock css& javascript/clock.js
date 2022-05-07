const secondhand =document.querySelector(".second-hand");
const minshand =document.querySelector(".min-hand");
const hourhand =document.querySelector(".hour-hand");


function setDate(){
 const now = new Date();

 const second = now.getSeconds();
 const degrees =((second/60)*360)+90;
 secondhand.style.transform=`rotate(${degrees}deg)`;
  
 
 const mins = now.getMinutes();
 const minsDegrees =((mins/60)*360)+90;
 minshand.style.transform=`rotate(${minsDegrees}deg)`;


 const hours=now.getHours();
 const hoursDegrees=((hours/12)*360)+90;
 hourhand.style.transform=`rotate(${hoursDegrees}deg)`;



}
setInterval(setDate, 1000);