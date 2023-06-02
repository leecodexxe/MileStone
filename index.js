window.addEventListener("DOMContentLoaded", (event) => {
    let myHealth = new HealthBar('hero')
    let enemHealth = new HealthBar('enemies')
    let deff = document.querySelector('#defense')
    myHealth.currentHealth(80)
    enemHealth.currentHealth(10,50)
    deff.addEventListener('click',()=>{
        myHealth.damageTake(50)
    })
  })
  
window.addEventListener("DOMContentLoaded", (event) => {
    panel.KeyShortcut();
    panel.itemMoadlOnAndOff();
    panel.skillMoadlOnAndOff();
    startMenu.start()
    attackMove.attMove();
    item_panel.displayitem()
})