class HealthBar {
    constructor(maxhealth,defend) {
        this.maxhealth = maxhealth;
        this.defend =defend
    }
    damageTake(damage,currhealth) {
        let bar = document.querySelector('#progress1')
        bar.style.width = (bar.offsetWidth - damage)+ "px"
    }
}