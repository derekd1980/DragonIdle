let enemy1Img;

class Enemy {

    constructor(_health, _maxHealth, _attack, _x,_y, _width,_height, _damage)
    {
        
        this.health = _health;
        this.maxHealth = _maxHealth;
        this.attack = _attack;
        this.x = _x;
        this.y = _y;
        this.width = _width;
        this.height = _height;
        this.damage = _damage;
        this.healthbar = new BasicBar(this.x,this.y,100,30, "red");
        enemy1Img = new Image();
        enemy1Img.src = 'res/img/enemy1.png';
    }
      
    getHealth()
    {
        return(this.health);
    }
    getMaxHealth()
    {
        return(this.maxHealth);
    }
    setHealth(damageTaken)
    {
        this.health = this.health - damageTaken;
    }
    getDamage()
    {
        return(this.damage);
    }
    draw()
    {
        ctx.drawImage(enemy1Img,this.x,this.y, this.width, this.height);
        drawText(Math.round(this.health)+"/"+this.maxHealth,17,this.x+20,this.y+120);
        drawText("damage: "+this.damage,20,this.x,this.y);
        this.healthbar.draw();
    }

}