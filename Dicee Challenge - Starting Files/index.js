var ksk= Math.floor(Math.random()*6+1);

var dayizi="images/dice"+ksk+".png";

document.querySelector(".img1").setAttribute("src", dayizi);



var ksk2=Math.floor(Math.random()*6+1);

var dayizi2="images/dice"+ksk2+".png";

document.querySelector(".img2").setAttribute("src", dayizi2);

if(dayizi===dayizi2){
  document.querySelector("h1").innerHTML="Draw";
}else if(dayizi>dayizi2){
  document.querySelector("h1").innerHTML="Player 1 WON!";
}else{
  document.querySelector("h1").innerHTML="Player 2 WON!";
}
