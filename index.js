var randowNumber1 = Math.floor(Math.random() * 6 ) + 1;
var randowNumber2 = Math.floor(Math.random() * 6 ) + 1;

var imagePath = `images/dice${randowNumber1}.png`
var imagePath2 = `images/dice${randowNumber2}.png`

var imgElement = document.querySelector(".img1") ;
var imgElement2 = document.querySelector(".img2") ;


imgElement.src = imagePath;
imgElement2.src = imagePath2

var h1Element = document.querySelector("h1")
if(randowNumber1 > randowNumber2){
    h1Element.textContent= "Player 1 wins 🚩"
}else if(randowNumber1 < randowNumber2){
    h1Element.textContent= "Player 2 wins 🚩"
}else{
    h1Element.textContent= "Draw"
}