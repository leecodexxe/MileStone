const Enemies = {
    damage: 0,
    block: 0,
    expGet: 0,
    stage:1,
    num: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    startGame: function () {
        if (this.stage === 1){
            this.damage = this.num(125, 125);
            this.block = this.num(0,15)
            this.expGet = this.num(500, 600)
        }
        else{
            let diff = difficulty()
            this.damage = this.num(10*diff, 15*diff);
            this.block = this.num(1*diff,15*diff)
            this.expGet = this.num(500*diff, 600*diff)
        }
        let shield = document.querySelector('#shield_point_ene')
        shield.textContent = this.block
    },
    currentHealth: function (health, maxHealth) {
        let bar = document.querySelector("#progress2");
        let max = document.querySelector(".Enemies-healthBar");
        bar.style.width = health + "px";
        max.style.width = maxHealth + "px";
    },
    damageTake: function (damage) {
        let bar = document.querySelector("#progress2");
        let shield = document.querySelector('#shield_point_ene')
        let block = Number(shield.textContent)
        if(damage > block){
        let num = damage - block
        log.attlog(num)
        shield.textContent = 0
        if (bar.offsetWidth - num > 0) {
            bar.style.width = bar.offsetWidth - num + "px";
        } else {
            document.querySelector(".Enemies").style.zIndex = "-10";
            document.querySelector(".Enemies-healthBar").style.zIndex = "-10";
            log.enmdeadlog();
            nextSatge(difficulty(this.stage));
            this.stage += 1
            console.log(this.stage)
        }
    }else{
        log.attlog(HealthBar.damage)
        shield.textContent = Number(shield.textContent)-damage
    }
    },
    damageDo: function () {
        attackMove.myHit(".mouse-hero", 20);
        attackMove.myHit(".Enemies", 0)
        HealthBar.damageTake(this.damage)
        setTimeout(panel.APStart, 300);
    }
}
function num(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function nextSatge(level) {
    let arrow = document.querySelector(".goArr");
    arrow.style.zIndex = "5";
    setTimeout(panel.APStart, 10);
    item_panel.displayitem()
    skill_panel.displayskill()
    arrow.addEventListener("click", () => {
        Enemies.currentHealth(100*level, 100*level);
        document.querySelector(".Enemies").style.zIndex = "8";
        document.querySelector(".Enemies-healthBar").style.zIndex = "8";
        arrow.style.zIndex = "-5";
        Enemies.startGame()
        log.cleanLog()
    });
}
function difficulty(){
    return 1 + Enemies.stage*0.1
}
