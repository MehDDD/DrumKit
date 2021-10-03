// detecting button pressed

var buttonArray = document.querySelectorAll(".drum");
for (i = 0; i < buttonArray.length; i++) {
  document.querySelectorAll(".drum")[i].onclick = function handleClick() {
    var buttonInnerHtml = this.innerHTML;
    makesound(buttonInnerHtml);

  }
}

// detecting keyboard pressed
// Add event listener on keydown
// addEventListener is the high order fuction and makesound is
// the Callback function for that. high order func get callbackfunc as an input
// dar vaghe callbackfunc sab mikone ke high order ejra beshe va dar natijash
// un ham ejra beshe. ebent darvaghe un chizi hast ke baese trigger kardan shode
// un ro mishe ba event shenasaei kard. un eventi ke func call back ro trigger
// karde shanasei mishe va mishe be unvane vorudi dadesh ba tabe callback.
// callbackfunc ro ma seda nemizanim, balke ma ba zadane dokme high order ro trigger
// mikonim va un callback ro seda mikone
document.addEventListener('keydown', (event) => {
  makesound(event.key);

});



function makesound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;


    default:

  }

}




// to perform a function when a key is pressed.
// document.addEventListener("keydown", function(){
//   alert("key was pressed!");
// });



// dar vaghe baraye Audio ham ye object sakhte shode mese methode zir
// ke vali hidden hast va ma nemitunim bebinimesh. dar vaghe Constructor Function
// estefade kardim. dar vaghe object Audio ro yebar sakhtim va azash
// barha estefade mikonim
// function BellBoy (name, age, hasWorkPermit, languages) {
// 	this.name = name;
// 	this.age = age;
// 	this.hasWorkPermit = hasWorkPermit;
// 	this.languages = languages;
// 	this.moveSuitcase: function() {
// 		alert ...;
// 		test();
// 	}
// }

///////////////////////////////////////////////////////////////

// Angela Method
// var buttonArray = document.querySelectorAll(".drum");
// for(i = 0; i < buttonArray.length; i++){
//   document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//   alert("I git clicked." + i);
//       });
//   }
