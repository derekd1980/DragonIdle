

function drawText(text, size,x, y)
{

    ctx.font = `${size}px Sans-serif`;
    ctx.strokeStyle = 'black';
    ctx.lineWidth = size/4;
    ctx.strokeText(text, x, y);
    ctx.fillStyle = 'white';
    ctx.fillText(text,x, y);
}

function drawCanvas(){
    //Adjust canvas to browser size **maybe only update on browser resize event?
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;
//clear canvas for next draw
ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);
}

