function func1() {
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
}
function func2() {
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
}
function func3() {
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
}
function func4() {
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
}
function func5() {
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
}
function func6() {
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
}
function func7() {
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
}
var container = document.querySelectorAll(".drum"); 
for (var i = 0; i < container.length; i++) {
    container[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation();
    });
}
function makeSound(buttonInnerHTML) {
    switch (buttonInnerHTML) {
        case "a":
            func1();
            buttonAnimation(buttonInnerHTML);
            break;
        case "s":
            func2();
            buttonAnimation(buttonInnerHTML);
            break;
        case "d":
            func3();
            buttonAnimation(buttonInnerHTML);
            break;
        case "f":
            func4();
            buttonAnimation(buttonInnerHTML);
            break;
        case "j":
            func5();
            buttonAnimation(buttonInnerHTML);
            break;
        case "k":
            func6();
            buttonAnimation(buttonInnerHTML);
            break;
        case "l":
            func7();
            buttonAnimation(buttonInnerHTML);
            break;
        default:
            console.log(a);
            break;
    }
}
document.addEventListener("keydown", function(event) {
    var a = event.key;
    makeSound(a);
    buttonAnimation(a);
})
function buttonAnimation(currentKey) {
    document.querySelector("." + currentKey).classList.add("pressed");
    setTimeout(function () {
        document.querySelector("." + currentKey).classList.remove("pressed");
    }, 100);
}