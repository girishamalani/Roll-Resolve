var pname1=prompt("player1 name");
document.querySelector(".dice").firstElementChild.innerHTML=pname1;
var pname2=prompt("player2 name");
document.querySelectorAll(".dice")[1].firstElementChild.innerHTML=pname2;

var a=Math.floor(6*Math.random())+1;
var b=Math.floor(6*Math.random())+1;
if(a===1){
    document.querySelector(".img1").setAttribute("src","./images/dice1.png");
}
if(a===2){
    document.querySelector(".img1").setAttribute("src","./images/dice2.png");
}
if(a===3){
    document.querySelector(".img1").setAttribute("src","./images/dice3.png");
}
if(a===4){
    document.querySelector(".img1").setAttribute("src","./images/dice4.png");
}
if(a===5){
    document.querySelector(".img1").setAttribute("src","./images/dice5.png");
}
if(a===6){
    document.querySelector(".img1").setAttribute("src","./images/dice6.png");
}
if(b===1){
    document.querySelector(".img2").setAttribute("src","./images/dice1.png");
}
if(b===2){
    document.querySelector(".img2").setAttribute("src","./images/dice2.png");
}
if(b===3){
    document.querySelector(".img2").setAttribute("src","./images/dice3.png");
}
if(b===4){
    document.querySelector(".img2").setAttribute("src","./images/dice4.png");
}
if(b===5){
    document.querySelector(".img2").setAttribute("src","./images/dice5.png");
}
if(b===6){
    document.querySelector(".img2").setAttribute("src","./images/dice6.png");
}
if(a>b){
    document.querySelector("h1").innerHTML=pname1+" wins";
}
else if(b>a){
    document.querySelector("h1").innerHTML=pname2+" wins";
}
else if(a===b){
    document.querySelector("h1").innerHTML="Draw";
}