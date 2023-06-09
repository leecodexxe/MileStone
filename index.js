window.addEventListener("DOMContentLoaded", (event) => {
    HealthBar.currentHealth(50)
    Enemies.currentHealth(1)
    panel.KeyShortcut();
    panel.itemMoadlOnAndOff();
    panel.skillMoadlOnAndOff();
    startMenu.start()
    attackMove.attMove();
    Enemies.startGame()
    defence.def()
})