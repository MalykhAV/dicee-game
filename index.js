var randomNumber1 = Math.floor((Math.random() * 6) + 1); //get random number 1
var randomNumber2 = Math.floor((Math.random() * 6) + 1); //get random number 2
var img1 = document.querySelector(".img1"); //choose image1 
var img2 = document.querySelector(".img2"); //choose image2 

img1.setAttribute("src", "images/dice"+randomNumber1+".png"); //set attribute to image1 depending on random number
img2.setAttribute("src", "images/dice"+randomNumber2+".png"); //set attribute to image2 depending on random number

// checking which Player wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}