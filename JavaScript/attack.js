const attackMove = {
  getPosition: function (pos) {
    return document.querySelector(pos).offsetLeft;
  },
  heroDamage: 5,
  attAP: 1,
  attMove: function () {
    (att = document.getElementById("attack")),
      att.addEventListener("click", () => {
        this.soundHit()
        Enemies.damageTake(attackMove.heroDamage)
        this.myAtt(".mouse-hero", 0);
        this.myAtt(".Enemies", 20)
        panel.APUse(this.attAP)
      });
  },
  myAtt: function (selector, time) {
    let elem = document.querySelector(selector);
    let num = this.getPosition(selector);
    let pos = this.getPosition(selector);
    const posX = pos + 10;
    let id = null;
    clearInterval(id);
    id = setInterval(frame, time);
    function frame() {
      if (pos == posX) {
        clearInterval(id);
        elem.style.left = num + "px";
      } else {
        pos = pos + 1;
        elem.style.left = pos + "px";
      }
    }
  },
  myHit: function (selector, time) {
    let elem = document.querySelector(selector);
    let num = this.getPosition(selector);
    let pos = this.getPosition(selector);
    const posX = pos - 10;
    let id = null;
    clearInterval(id);
    id = setInterval(frame, time);
    function frame() {
      if (pos == posX) {
        clearInterval(id);
        elem.style.left = num + "px";
      } else {
        pos = pos - 1;
        elem.style.left = pos + "px";
      }
    }
  },
  soundHit:function(){
    let mySound = new Audio('./sound/mixkit-air-whistle-punch-2048.wav')
    mySound.play()
  }
};
