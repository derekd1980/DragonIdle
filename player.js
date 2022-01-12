let playerImg;
class Player {

    constructor(_health, _maxHealth, _attack, _x,_y, _width,_height, _damage)
    {
        playerImg = new Image();
        playerImg.src = 'res/img/char.png';
        this.health = _health;
        this.maxHealth = _maxHealth;
        this.attack = _attack;
        this.x = _x;
        this.y = _y;
        this.width = _width;
        this.height = _height;
        this.damage = _damage;

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
        ctx.drawImage(playerImg,this.x,this.y, this.width, this.height);
        drawText(Math.round(this.health)+"/"+this.maxHealth,17,this.x+20,this.y+120);
        drawText("damage: "+this.damage, 20,this.x,this.y);
    }

}
