for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var btn = this.innerHTML;
    makeSound(btn);
    btnAnimation1(btn);
  });
}

document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  btnAnimation1(event.key);
});

function makeSound(input) {
  switch (input) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare1 = new Audio('sounds/snare.mp3');
      snare1.play();
      break;

    case "k":
      var crash1 = new Audio('sounds/crash.mp3');
      crash1.play();
      break;

    case "l":
      var kick1 = new Audio('sounds/kick-bass.mp3');
      kick1.play();
      break;

    default:
      console.log(this.innerHTML);

  }
}

function btnAnimation1(currentkey) {
  document.querySelector("." + currentkey).classList.add("pressed");
  setTimeout(function() {
    document.querySelector("." + currentkey).classList.remove("pressed");
  }, 100);
}
