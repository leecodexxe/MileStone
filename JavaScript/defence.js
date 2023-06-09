const defence = {
    def: function () {
        let deff = document.querySelector('#defense')
        deff.addEventListener('click', () => {
            let shield = document.querySelector('#shield_point')
            let num = shield.textContent
            if (shield.textContent != 0) {
                num = Number(num) + HealthBar.block
            } else { num = HealthBar.block }
            panel.APUse(1)
            shield.textContent = num
        })
    },
    adddef: function (number) {
        let shield = document.querySelector('#shield_point')
        let num = shield.textContent
        if (shield.textContent != 0) {
            num = Number(num) + (HealthBar.block * number)
        } else {num = (HealthBar.block * number) }
        shield.textContent = num
    }
}