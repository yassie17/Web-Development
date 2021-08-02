var canva1 = document.getElementById("Colors").getContext("2d");
canva1.beginPath();
canva1.rect(0,0,200,200);
canva1.fillStyle="#FF0000";
canva1.fill();
canva1.beginPath();
canva1.rect(200,0,200,200);
canva1.fillStyle="#0000FF";
canva1.fill();
canva1.beginPath();
canva1.rect(0,200,200,200);
canva1.fillStyle="#FFFF00";
canva1.fill();
canva1.beginPath();
canva1.rect(200,200,200,200);
canva1.fillStyle="#008000";
canva1.fill();
var canva2 = document.getElementById("OpenWGL").getContext("2d");
canva2.font = "60px Courier";
canva2.fillStyle = "#483D8B"
canva2.fillText("Open WebGL",15,220);
function over(){
    var canva1 = document.getElementById("Colors").getContext("2d");
    canva1.beginPath();
    canva1.rect(0,0,200,200);
    canva1.fillStyle="#FFFF00";
    canva1.fill();
    canva1.beginPath();
    canva1.rect(200,0,200,200);
    canva1.fillStyle="#00FFFF";
    canva1.fill();
    canva1.beginPath();
    canva1.rect(0,200,200,200);
    canva1.fillStyle="#FFB347";
    canva1.fill();
    canva1.beginPath();
    canva1.rect(200,200,200,200);
    canva1.fillStyle="#8B008B";
    canva1.fill();
}
function out(){
    var canva1 = document.getElementById("Colors").getContext("2d");
    canva1.beginPath();
    canva1.rect(0,0,200,200);
    canva1.fillStyle="#FF0000";
    canva1.fill();
    canva1.beginPath();
    canva1.rect(200,0,200,200);
    canva1.fillStyle="#0000FF";
    canva1.fill();
    canva1.beginPath();
    canva1.rect(0,200,200,200);
    canva1.fillStyle="#FFFF00";
    canva1.fill();
    canva1.beginPath();
    canva1.rect(200,200,200,200);
    canva1.fillStyle="#008000";
    canva1.fill();
}
function gallery() {
    $('.D1').animate({left: '-=50'})
    $('.D2').animate({left: '+=50'})
}
function canvas() {
    $('.D1').animate({left: '25%'})
    $('.D2').animate({left: '55%'})
}