const panel = {
  skill:   document.getElementsByClassName("skill_panel"),
  item:   document.getElementsByClassName("item_panel"),
  //keypress for menu
  KeyShortcut : function () {
      const panel = document.querySelector("body");
      panel.addEventListener("keydown", (e) => {
        if (e.key === "1") {
          console.log("1");
        }
        if (e.key === "2") {
          console.log("2");
        }
        if (e.key === "3") {
          this.index(e.key)
        }
        if (e.key === "4") {
          this.index(e.key)
        }
        if (e.key === "0" || e.key === "Escape") {
          this.index(e.key)
        }
      });
  },
//click item
  itemMoadlOnAndOff: function () {
      const itemModal = document.getElementById("item");
      const item = document.querySelector("#quitItem");
      itemModal.addEventListener("click", (e)=>{this.index(e.pointerType)});
      item.addEventListener("click", ()=>{this.index()});
  },
//click skill
  skillMoadlOnAndOff: function () {
      const skillMenu = document.getElementById("skill");
      const quit = document.querySelector("#quitSkill");
      skillMenu.addEventListener("click", (e)=>{this.index(e.type)});
      quit.addEventListener("click", ()=>{this.index()});
  },
//function to back to main menu use keypress
  index: function (key) {
    if(key === "3" || key ==="mouse"){
      this.item[0].style.display = "flex";
      this.skill[0].style.display = "none";
    }
    else if(key === "4" || key === "click"){
      this.skill[0].style.display = "flex";
      this.item[0].style.display = "none";
    }
    else{
      this.item[0].style.display = "none";
      this.skill[0].style.display = "none";
    }
  },
//await for content load and call the function
}
const startMenu = {
  start: function(){
    const start = document.querySelector('.start-menu')
    const startbottom = document.getElementById('startbottom')
    startbottom.addEventListener('click',()=>{
      start.style.display = 'none'
      document.querySelector('.panel').style.display = 'grid'
    })
  },
}