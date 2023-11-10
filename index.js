var randomNumber1 = Math.floor((Math.random() * 6)) + 1;
var randomDiceImage = "images/" + randomNumber1 + ".png";

var randomNumber2 = Math.floor((Math.random() * 6)) + 1;
var randomDiceImage2 = "images/" + randomNumber2 + ".png";

document.querySelector(".side1").setAttribute("src", randomDiceImage);
document.querySelector(".side2").setAttribute("src", randomDiceImage2);

if(randomNumber1 > randomNumber2){
    document.querySelector("#heading").innerHTML = "Player 1 Wins❗❗❗";
}
if(randomNumber1 < randomNumber2){
    document.querySelector("#heading").innerHTML = "Player 2 Wins❗❗❗";
}
if(randomNumber1 == randomNumber2){
    document.querySelector("#heading").innerHTML = "D R A W ❗";
}
