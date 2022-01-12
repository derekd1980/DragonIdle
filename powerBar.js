
var powIcon;
var powBarimg;
var powBarRight;
var powBarBack;
var powBarBackRight;

class PowerBar{
    constructor()
    {
            //load images
        powIcon = new Image();
        powIcon.src = 'res/img/powIcon.webp';

        powBarimg = new Image();
        powBarimg.src = 'res/img/powBar.webp';

        powBarBack = new Image();
        powBarBack.src = 'res/img/powBarBack.webp';

        powBarRight = new Image();
        powBarRight.src = 'res/img/powBarRight.webp';

        powBarBackRight = new Image();
        powBarBackRight.src = 'res/img/powBarBackRight.webp';
    }
    draw()
    {
        var x = 30;
        var y = 30;
        ctx.drawImage(powBarBack, ((canvas.width-powBarBack.width)-110)-x, 0+y,powBarBack.width+90,powBarBack.height);

        ctx.drawImage(powBarBackRight, ((canvas.width-powBarBackRight.width))-x, -1+y,powBarBackRight.width,powBarBackRight.height+1);

        //fadebar
        ctx.globalAlpha = barFade;
        ctx.drawImage(powBarimg, ((canvas.width-powBarimg.width)-97)-x, 12.5+y,powBarimg.width+71,powBarimg.height/2.2);

    
        ctx.drawImage(powBarRight, ((canvas.width-powBarRight.width)-4)-x, 12.5+y,powBarRight.width-10,powBarRight.height/2.2);
        ctx.globalAlpha = 1.0;
        

        //bar
        ctx.drawImage(powBarimg, ((canvas.width-powBarimg.width)-97)-x, 12.5+y,(powBarimg.width+barLength)-20,powBarimg.height/2.2);

        ctx.drawImage(powBarRight, (((canvas.width-powBarRight.width)+barLength)-95)-x, 12.5+y,powBarRight.width-10,powBarRight.height/2.2);
        
    

        ctx.drawImage(powIcon, ((canvas.width-powIcon.width)-100)-x, 0+y,powIcon.width,powIcon.height);

        //draw text
        drawText(energyAmount+"/50",20,470,35);
        
    }
}