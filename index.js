window.addEventListener("DOMContentLoaded", (event) => {
    HealthBar.currentHealth(100)
    Enemies.currentHealth(100,100)
    panel.KeyShortcut();
    panel.itemMoadlOnAndOff();
    panel.skillMoadlOnAndOff();
    startMenu.start()
    attackMove.attMove();
    item_panel.displayitem()
    skill_panel.displayskill()
    Enemies.startGame()
    defence.def()
})