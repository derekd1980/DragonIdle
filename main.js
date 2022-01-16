"use strict";
let ctx;
let canvas;
let canvasCenterX;
let canvasCenterY;
let fps;
let start;
let elapsed;
let currentTime =0;
let currentDate;
let tick;
let startTick;
let lastTick;
let currentTick;
let storedTicks;
let start1;
let stored;
//images


var barFade;
let barLength;
var energyAmount;

let player;
let enemy;
let powBar;

let sceneNumber;
window.onload = init;


function init()
{
    
    powBar = new PowerBar();
    //innit player
    player = new Player(100,100,10, 100, 200, 100, 100, 10);
    //innit enemy
    enemy = new Enemy(10,10,10, 350, 200, 100, 100,10);
    //innit canvas
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    drawCanvas();
    canvas.addEventListener('mousedown', function(event) {
       onClick();
            }, false);
            sceneNumber=1;
    //innit start values
    energyAmount=0;
    barLength= 0;
    barFade=0;
    start = Date.now();
    start1 = start;
    lastTick =1;
    storedTicks =0;
    currentTick=1;
    
 
 
 
window.requestAnimationFrame(gameLoop);
}

function gameLoop()
{
    currentTime = Date.now();
    elapsed = currentTime-start;      
    start = currentTime;
    fps = Math.round(1000/elapsed);
    
    tick = Math.round(elapsed/10);
    storedTicks = storedTicks + tick;
    drawScene(sceneNumber);

window.requestAnimationFrame(gameLoop);
}

function update(storedTicks)
{
    stored = storedTicks;
    if(energyAmount<50)
        {
   
    barLength= barLength+(stored/2);
    if(barFade>=0.2){
        barFade-= 0.02;
    }
    if(barLength>92)
    {
        barLength= 0;
        barFade =1;
         
            energyAmount++;
        }
        
    }
    fight(stored/1000);
   stored = 0;
    
  
   
    
}

function draw()
{
    // draw canvas
    drawCanvas();

drawGrid();

    //draw power bar
    powBar.draw();
    //draw player 
    player.draw();
    enemy.draw(); 
   
    drawText("fps"+fps,25,10,25);
    
}


function drawScene(scene)
{
    if(scene == 1){

        update(storedTicks);
        storedTicks = 0;
        draw();
        
    }else{
        scene2();
    }
}
function drawGrid()
{
   
    ctx.fillStyle = '242424';
//    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = .8;
    
   
    ctx.lineWidth = .05;
    //ctx.strokeStyle = "#ddd";
   // ctx.strokeStyle = 'blue';
    for (var x = 0.5; x < canvas.width; x += 10) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
      }
      
      for (var y = 0.5; y < canvas.height; y += 10) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
      }
      
      ctx.moveTo(0,0);
      ctx.lineTo(canvas.width,canvas.height);
      ctx.moveTo(canvas.width,0);
      ctx.lineTo(0,canvas.height);
      ctx.strokeStyle = "white";
      ctx.stroke();
      ctx.globalAlpha = 1;
}

function onClick() {
    if(sceneNumber==1)
    {
        sceneNumber= 2;
    }else{
        sceneNumber=1;
    }
}

function scene2()
{
    
}
function fight(stored)
{
    
    player.setHealth(enemy.getDamage()*stored);
    enemy.setHealth(player.getDamage()*stored);
  if(enemy.getHealth()<=0){
        enemy.health =10;
    }
}
