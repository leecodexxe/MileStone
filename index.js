window.addEventListener("DOMContentLoaded", (event) => {
    let bar = document.querySelector('#progress1')
    bar.style.width = 100+'px'
    let myHealth = new HealthBar()
    let deff = document.querySelector('#defense')
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
})