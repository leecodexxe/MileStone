const HealthBar = {
  damage: 20,
  block: 5,
  expHave: 0,
  currentHealth: function (health, maxHealth) {
    let bar = document.querySelector("#progress1");
    let max = document.querySelector(".hero-healthBar");
    bar.style.width = health + "px";
    max.style.width = maxHealth + "px";
  },
  damageTake: function (damage) {
    let shield = document.querySelector('#shield_point')
    let block = Number(shield.textContent)
    let dam = damage - block
    let bar = document.querySelector("#progress1");
    if(damage > block){
      let num = damage - block
      if (bar.offsetWidth - num > 0) {
          console.log(num)
          shield.textContent = 0
          bar.style.width = bar.offsetWidth - num + "px";
      } else {
        console.log("you dead")
        bar.style.width = bar.offsetWidth - bar.offsetWidth + "px";
        document.querySelector(".end_bad").style.display = "initial"
        document.querySelector(".panel").remove()
      }
          
  }else{shield.textContent = Number(shield.textContent)-damage}
  },

}
function addHealth(health) {
  let bar = document.querySelector("#progress1");
  let max = document.querySelector(".hero-healthBar").style.width;
  console.log(max)
  bar.style.width = bar.offsetWidth + health + "px";
}
