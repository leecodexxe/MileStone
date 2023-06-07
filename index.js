window.addEventListener("DOMContentLoaded", (event) => {
    HealthBar.currentHealth(100)
    Enemies.currentHealth(1,100)
    panel.KeyShortcut();
    panel.itemMoadlOnAndOff();
    panel.skillMoadlOnAndOff();
    startMenu.start()
    attackMove.attMove();
    Enemies.startGame()
    defence.def()
})