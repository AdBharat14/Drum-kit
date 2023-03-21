"use strict";

var drumButtons = document.querySelectorAll(".drum");

const play = function (key) {
    switch (key) {
        case 'w':
            var button_w = new Audio("sounds/tom-1.mp3");
            button_w.play();
            break;
        case 'a':
            var button_a = new Audio("sounds/tom-2.mp3");
            button_a.play();
            break;
        case 's':
            var button_s = new Audio("sounds/tom-3.mp3");
            button_s.play();
            break;
        case 'd':
            var button_d = new Audio("sounds/tom-4.mp3");
            button_d.play();
            break;
        case 'j':
            var button_j = new Audio("sounds/snare.mp3");
            button_j.play();
            break;
        case 'k':
            var button_k = new Audio("sounds/crash.mp3");
            button_k.play();
            break;
        case 'l':
            var button_l = new Audio("sounds/kick-bass.mp3");
            button_l.play();
            break;

        default:
            break;
    }
}

const highlightButton = function (key) {
    var buttonPressed = document.querySelector("." + key);
    buttonPressed.classList.add("pressed");
    setTimeout(() => { buttonPressed.classList.remove("pressed") }, 200);
}

for (var i = 0; i < drumButtons.length; i++)
    drumButtons[i].addEventListener('click', function () {
        var buttonText = this.innerHTML;
        highlightButton(buttonText);
        play(buttonText);
    });

document.addEventListener('keydown', function (event) {
    var buttonText = event.key.toLowerCase();
    highlightButton(buttonText);
    play(buttonText);
});

