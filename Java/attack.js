const attackMove = {
  pos: 0,
  getPosition: function () {
    return document.querySelector(".mouse-hero").offsetLeft;
  },
  attMove: function () {
    (att = document.getElementById("attack")),
      att.addEventListener("click", () => {
        this.myAtt();
      });
  },

  myAtt: function () {
    let elem = document.querySelector(".mouse-hero");
    let num = this.getPosition();
    let pos = this.getPosition();
    const posX = pos + 10;
    let id = null;
    clearInterval(id);
    id = setInterval(frame, 0);
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
