
//Detecting Button Pressed.

drumButtons = document.querySelectorAll(".drum");

numberOfDrumButtons = drumButtons.length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  drumButtons[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

  });

}



document.addEventListener("keypress", (evt) => { //we are passing event(keypress event object as input to our callback fuctio. to see wt is event do console.log(event);)

  //console.log(event); // here "keypress" is a event type. each keyboardevents have many properties, event.key is js property,

  //it will give the key pressed - alphanumeric value.

        makeSound(evt.key);

        buttonAnimation(evt.key);

     });



//playing correct sound on correct event.

function makeSound(value){

    switch (value) {

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

        alert("Please press a valid key.")



    }

  }



function buttonAnimation(currentKey) {

  var activeKey = document.querySelector("." + currentKey);

  activeKey.classList.add("pressed");

  setTimeout(function() {

       activeKey.classList.remove("pressed");

  } , 100); //after 100miliseconds class pressed is removed

}











/*
drumButtons = document.querySelectorAll(".drum");
numberOfDrumButtons =  drumButtons.length;

for(var i =0; i < numberOfDrumButtons; i++){

drumButtons[i].addEventListener("click", function() {
  var buttonInnerHTML = this.InnerHTML;
  makeSound(buttonInnerHTML);
buttonAnimation(buttonInnerHTML);

});
}


document.addEventListener("keydown", (evt)=>{


  makeSound(evt.key);
buttonAnimation(evt.key);

});

function makeSound(value){
  switch (value) {

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

      alert("Please press a valid key.")
  }
}

function buttonAnimation(currentKey){
  var activeKey = document.querySelector(".", currentKey);
  activeKey.classList.add("pressed");

  setTimeout(function(){
activeKey.classList.remove("pressed");
},100);

}
*/
