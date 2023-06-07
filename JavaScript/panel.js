const panel = {
  skill: document.getElementsByClassName("skill_panel"),
  item: document.getElementsByClassName("item_panel"),
  //keypress for menu
  KeyShortcut: function () {
    const panel = document.querySelector("body");
    panel.addEventListener("keydown", (e) => {
      if (e.key === "1") {
        console.log("1");
      }
      if (e.key === "2") {
        console.log("2");
      }
      if (e.key === "3") {
        this.index(e.key);
      }
      if (e.key === "4") {
        this.index(e.key);
      }
      if (e.key === "0" || e.key === "Escape") {
        this.index(e.key);
      }
    });
  },
  //click item
  itemMoadlOnAndOff: function () {
    const itemModal = document.getElementById("item");
    const item = document.querySelector(".item_panel");
    itemModal.addEventListener("click", (e) => {
      this.index("3");
    });
    item.addEventListener("click", (e) => {
      if (e.target.id === "quitItem") {
        this.index();
      } else {
        item_panel.useItem(e.target.id);
      }
    });
  },
  //click skill
  skillMoadlOnAndOff: function () {
    const skillMenu = document.getElementById("skill");
    const skill = document.querySelector(".skill_panel");
    skillMenu.addEventListener("click", (e) => {
      this.index("4");
    });
    skill.addEventListener("click", (e) => {
      if (e.target.id === "quitSkill") {
        this.index();
      } else {
        skill_panel.useSkill(e.target.textContent);
      }
    });
  },
  //function to back to main menu use keypress
  index: function (key) {
    if (key === "3") {
      this.item[0].style.display = "flex";
      this.skill[0].style.display = "none";
    } else if (key === "4") {
      this.skill[0].style.display = "flex";
      this.item[0].style.display = "none";
    } else {
      this.item[0].style.display = "none";
      this.skill[0].style.display = "none";
    }
  },
  APStart: function () {
    let ap = document.querySelector("#curr_point").textContent;
    let max = document.querySelector("#max_point").textContent;
    ap = max;
    document.querySelector("#curr_point").textContent = ap;
    document.getElementById("attack").style.backgroundColor = "white";
    document.getElementById("defense").style.backgroundColor = "white";
    document.getElementById("item").style.backgroundColor = "white";
    document.getElementById("skill").style.backgroundColor = "white";
  },
  APUse: function (skillUse) {
    let ap = document.querySelector("#curr_point");
    if (ap.textContent > 1) {
      document.querySelector("#curr_point").textContent =
        ap.textContent - skillUse;
    } else {
      document.querySelector("#curr_point").textContent = 0;
      document.getElementById("attack").style.backgroundColor = "black";
      document.getElementById("defense").style.backgroundColor = "black";
      document.getElementById("item").style.backgroundColor = "black";
      document.getElementById("skill").style.backgroundColor = "black";
      setTimeout(() => {
        Enemies.damageDo()
      }, 1000);
    }
  },
  APMax: function (maxAP) {
    document.querySelector("#max_point").textContent = maxAP;
  },
};
const startMenu = {
  start: function () {
    const start = document.querySelector(".start-menu");
    const startbottom = document.getElementById("startbottom");
    startbottom.addEventListener("click", () => {
      start.style.display = "none";
      document.querySelector(".panel").style.display = "grid";
    });
  },
  End: function () {
    const end = document.querySelector(".end_bad");
    end.style.display = "block";
  },
};
const item_panel = {
  random: function () {
    return Math.floor(Math.random() * PotionItem.length);
  },
  displayitem: function () {
    this.additem(PotionItem[this.random()]);
  },
  additem: function (itemList) {
    const itemMenu = document.querySelector(".item_panel");
    let item = document.createElement("p");
    log.itemlog(itemList.name);
    item.innerText = item.innerText + itemList.name;
    item.id = itemList.name;
    itemMenu.appendChild(item);
  },
  useItem: function (item) {
    let i = PotionItem.find((element) => element.name === item);
    if (i.type === "healing") {
      addHealth(i);
      let mySound = new Audio('./sound/ZQXTJNV-heal-lesser-healing.mp3')
      mySound.volume = 0.1
      mySound.play()
    }
  },
  deleteItem: function (item) {
    const itemMenu = document.getElementById(item.name);
    itemMenu.remove();
  },
};
const skill_panel = {
  random: function () {
    return Math.floor(Math.random() * skillList.length);
  },
  displayskill: function () {
    this.addskill(skillList[this.random()]);
  },
  addskill: function (skillList) {
    console.log(skillList)
    const skillMenu = document.querySelector(".skill_panel");
    let skill = document.createElement("p");
    let length = skillMenu.children.length
    let isture = forEach(skillList.id,length,skillMenu.children)
    console.log(isture)
    if (isture === true){
      log.itemlog(skillList.name+" level UP!");
      let skillexe = document.getElementById(skillList.id)
      skillexe.innerText = skillexe.innerText + " +1"
    }else{
      log.itemlog(skillList.name);
    skill.innerText = skillList.name;
    skill.id = skillList.id;
    skillMenu.appendChild(skill);
    }
  },
  useSkill: function (skill) {
    let i = skillList.find((element) => element.name === skill);
    let ap = document.querySelector("#curr_point").textContent;
    if (ap >= i.APU) {
      if (i.type === "attSkill") {
        document.querySelector("#curr_point").textContent = ap - i.APU;
      }
      if (i.type === "defSkill") {
        document.querySelector("#curr_point").textContent = ap - i.APU;
      }
      if (i.type === "leechSkill") {
        document.querySelector("#curr_point").textContent = ap - i.APU;
      }
    } else {
      alert("Not enough AP!");
    }
  },
};
const log = {
  itemlog: function (text) {
    let log = document.querySelector("#log_message");
    if (log.innerText === "") {
      log.innerText = "You get: " + text;
    } else {
      log.innerText = log.innerText + "\nYou get: " + text;
    }
  },
  attlog: function (text) {
    let log = document.querySelector("#log_message");
    log.innerText = log.innerText + "\nYou deal: " + text + " Damage";
  },
  enmdeadlog: function () {
    let log = document.querySelector("#log_message");
    log.innerText = log.innerText + "\nYou Defeated the enemy !";
  },
  cleanLog: function () {
    let log = document.querySelector("#log_message");
    log.innerText = ""
  }
};
function toClose() {
  window.close();
}
function toREstart() {
  location.reload();
}
function forEach(item,length,exeSkill){
  for (let i = 0; i < length;i++){
    if (item == exeSkill[i].id){
      return true
    }
  }
}