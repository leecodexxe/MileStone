const HealthBar = {
  damage: 5,
  block: 5,
  expHave: 0,
  currentHealth: function (health, maxHealth) {
    let bar = document.querySelector("#progress1");
    let max = document.querySelector(".hero-healthBar");
    bar.style.width = health + "px";
    max.style.width = maxHealth + "px";
  },
  damageTake: function (damage) {
    let dam = damage - this.block
    this.block = this.block - damage
    let bar = document.querySelector("#progress1");
    bar.style.width = bar.offsetWidth - dam + "px";
  },

}
function addHealth(health) {
  let bar = document.querySelector("#progress1");
  let he = health.effect;
  bar.style.width = bar.offsetWidth + he + "px";
  item_panel.deleteItem(health);
}
