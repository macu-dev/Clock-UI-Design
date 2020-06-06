let hours_hand ;
let seconds_hand ;
let minutes_hand ;

function main(){

  hours_hand = document.querySelector('.hour-hand');
  seconds_hand = document.querySelector('.second-hand');
  minutes_hand = document.querySelector('.min-hand');

  setInterval(setDay, 1000);
};

function setDay() {
  const now = new Date;
  const seconds = now.getSeconds();
  const hours = now.getHours();
  const minutes = now.getMinutes();


  const angle_seconds = ((seconds/60)*360)+90;
  seconds_hand.style.transform = `rotate(${angle_seconds}deg)`;
  const angle_minutes = ((minutes/60)*360)+90;
  minutes_hand.style.transform = `rotate(${angle_minutes}deg)`;

  const angle_hours = ((hours/12)*360)+90;
  hours_hand.style.transform = `rotate(${angle_hours}deg)`;

}

window.onload = main;



