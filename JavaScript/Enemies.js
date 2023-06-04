const Enemies = {
    damage: 0,
    block: 0,
    expGet: 0,
    num: function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    startGame: function () {
        this.damage = this.num(12, 24);
        this.block = this.num(5,5)
        this.expGet = this.num(500, 600)
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
        log.attlog(attackMove.heroDamage)
        if(damage > block){
        let num = damage - block
        if (bar.offsetWidth - num > 0) {
            console.log(num)
            shield.textContent = 0
            bar.style.width = bar.offsetWidth - num + "px";
        } else {
            document.querySelector(".Enemies").style.zIndex = "-10";
            document.querySelector(".Enemies-healthBar").style.zIndex = "-10";
            log.enmdeadlog();
            item_panel.displayitem();
            nextSatge();
        }
    }else{shield.textContent = Number(shield.textContent)-damage}
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
function nextSatge() {
    let arrow = document.querySelector(".goArr");
    log.cleanLog()
    arrow.style.zIndex = "5";
    setTimeout(panel.APStart, 10);
    arrow.addEventListener("click", () => {
        Enemies.currentHealth(100, 100);
        document.querySelector(".Enemies").style.zIndex = "8";
        document.querySelector(".Enemies-healthBar").style.zIndex = "8";
        arrow.style.zIndex = "-5";
    });
}
