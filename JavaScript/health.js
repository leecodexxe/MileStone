class HealthBar {
    constructor(type) {
        this.type = type;
    }
    currentHealth(health,maxHealth) {
        if (this.type === 'hero'){
            let bar = document.querySelector('#progress1')
            let max = document.querySelector('.hero-healthBar')
            bar.style.width = health+ "px"
            max.style.width = maxHealth+ "px"
        }
        if (this.type === 'enemies'){
            let bar = document.querySelector('#progress2')
            let max = document.querySelector('.Enemies-healthBar')
            bar.style.width = health+ "px"
            max.style.width = maxHealth+ "px"
        }
    }
    damageTake(damage) {
        if (this.type === 'hero'){
            let bar = document.querySelector('#progress1')
            bar.style.width = (bar.offsetWidth - damage)+ "px"
        }
        if (this.type === 'enemies'){
            let bar = document.querySelector('#progress2')
            if(bar.offsetWidth-damage === 0){
                bar.style.width = (bar.offsetWidth - damage)+ "px"
                document.querySelector(".Enemies").remove()
                document.querySelector(".Enemies-healthBar").remove()
                startMenu.End()
            }
            else{bar.style.width = (bar.offsetWidth - damage)+ "px"}
        }
    }
}
function addHealth(health) {
    let bar = document.querySelector('#progress1')
    let he = health.effect
    bar.style.width = (bar.offsetWidth + he)+ "px"
    item_panel.deleteItem(health)
}