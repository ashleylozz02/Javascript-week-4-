///HARD: Create two buttons, one that when clicked turns the background of the body red. The other, when clicked, turns the body's background color white. Each of the background colors should be defined as class styles and when the buttons are pushed the body's classList is updated to include the correct class for the background.

///Create a single function that takes an input className and updates the body's classList to ONLY include that className
//color change array
/*let colors= ["red","white"];
//add event listener
let button=document.getElementById('button')
//add event listener//
button.addEventListener(`click`,function()){
   //randomizer//
    let randomcolor=colors[Math.floor(math.random)()*colors.length]
    //get container 
    let container =documentgetbyid
}
/*
*/
letbtnRed = document.querySelector("#btn-Red");
letbtnWhite = document.querySelector("#btn-white");
etdropdown = document.querySelector("select");
btnRed.addEventlistner("click", () => {
  document.body.style.background = "red";
});
btnRed.addEventlistner("click", () => {
  document.body.style.background = "white";
});
dropdown.ad.addEventlistner("change", function () {
  const color = this.value;
  switch (color) {
    case "red":
      document.body.style.background = "red";
      break;
    case "white":
      document.body.style.background = "White";
      break;
    default:
      document.body.style.background = "blue";
      break;
  }
});
