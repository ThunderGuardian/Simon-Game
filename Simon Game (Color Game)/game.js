
var buttonColors=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern = [];
var level =0;
var i=0;

$(".btn").click(handler);

$(document).keydown(nextSquence);

function nextSquence(){
    userClickedPattern=[];
    i=0;
    var randomNumber= Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    console.log(gamePattern);
    var s=$("#"+randomChosenColor);
    s.animate({opacity:0}).animate({opacity:1.5});
    makeSound(randomChosenColor);
    $("h1").text("Level "+level);
    level= level+1;


}

function makeSound(key){
    switch(key){
        case'red':var redAudio=new Audio("sounds/red.mp3")
        redAudio.play();
        break;
        case'blue':var blueAudio=new Audio("sounds/blue.mp3")
        blueAudio.play();
        break;
        case'green':var greenAudio=new Audio("sounds/green.mp3")
        greenAudio.play();
        break;
        case'yellow':var yellowAudio=new Audio("sounds/yellow.mp3")
        yellowAudio.play();
        break;
        
    }
}

function handler(){

    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
    makeSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(i);
   
    
}

function animatePress(currentColor){
    var j = $("#"+currentColor);
    j.addClass("pressed");
    setTimeout(function(){j.removeClass("pressed")},100);
    
}

function checkAnswer(currentLevel){
    i++;
  if(userClickedPattern[currentLevel]==gamePattern[currentLevel]){
    var x=1
    console.log("Success");
    console.log("User Clicked Pattern: "+userClickedPattern);
    console.log("Game Pattern: "+gamePattern);
  }
  else{
    console.log("Wrong");
    console.log("User Clicked Pattern: "+userClickedPattern);
    console.log("Game Pattern: "+gamePattern);
    var k= new Audio("sounds/wrong.mp3");
    k.play();
    $("body").addClass("game-over");
    setTimeout(function(){$("body").removeClass("game-over")},1);
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
}
var len1 = userClickedPattern.length;
var len2 = gamePattern.length;
if((len1==len2)){
    setTimeout(nextSquence,300);
    // nextSquence()
}
}

function startOver(){
    level=0;
    gamePattern=[]; 
    i=0;
}