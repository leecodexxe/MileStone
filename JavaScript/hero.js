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
    // bar.style.width = bar.offsetWidth - dam + "px";
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
      }
  }else{shield.textContent = Number(shield.textContent)-damage}
  }
  },

}
function addHealth(health) {
  let bar = document.querySelector("#progress1");
  let he = health.effect;
  bar.style.width = bar.offsetWidth + he + "px";
  item_panel.deleteItem(health);
}
