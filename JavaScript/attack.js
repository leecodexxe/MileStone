const attackMove = {
  getPosition: function (pos) {
    return document.querySelector(pos).offsetLeft;
  },
  attMove: function () {
    (att = document.getElementById("attack")),
      att.addEventListener("click", () => {
        let Health = new HealthBar('enemies')
        this.myAtt(".mouse-hero",0);
        Health.damageTake(5)
        this.myAtt(".Enemies",20)
        panel.APUse()
      });
  },

  myAtt: function (selector,time) {
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
  myHit: function () {
    let elem = document.querySelector(".mouse-hero");
    let num = this.getPosition();
    let pos = this.getPosition();
    const posX = pos - 10;
    let id = null;
    clearInterval(id);
    id = setInterval(frame, 0);
    function frame() {
      if (pos == posX) {
        clearInterval(id);
        elem.style.left = num + "px";
      } else {
        pos = pos - 2;
        elem.style.left = pos + "px";
      }
    }
  },
};
