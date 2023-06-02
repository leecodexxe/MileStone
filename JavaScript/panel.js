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
      const item = document.querySelector(".item_panel");
      itemModal.addEventListener("click", (e)=>{this.index("3")});
      item.addEventListener("click", (e)=>{
        if (e.target.id === 'quitItem'){
          this.index()
        }
        else{item_panel.useItem(e.target.id)}
      });
  },
//click skill
  skillMoadlOnAndOff: function () {
      const skillMenu = document.getElementById("skill");
      const quit = document.querySelector("#quitSkill");
      skillMenu.addEventListener("click", (e)=>{this.index("4")});
      quit.addEventListener("click", ()=>{this.index()});
  },
//function to back to main menu use keypress
  index: function (key) {
    if(key === "3"){
      this.item[0].style.display = "flex";
      this.skill[0].style.display = "none";
    }
    else if(key === "4"){
      this.skill[0].style.display = "flex";
      this.item[0].style.display = "none";
    }
    else{
      this.item[0].style.display = "none";
      this.skill[0].style.display = "none";
    }
  },
APUse:function (){
  let ap = document.querySelector("#curr_point")
  let use = ap.textContent-1
  if(ap.textContent > 1){
    document.querySelector("#curr_point").textContent = use
  }
  else{
    document.querySelector("#curr_point").textContent = 0
    this.APEnd()
  }
},
APEnd:function () {
  document.getElementById('attack').style.backgroundColor = "black"
  document.getElementById('defense').style.backgroundColor = "black"
  document.getElementById('item').style.backgroundColor = "black"
  document.getElementById('skill').style.backgroundColor = "black"
},
APMax:function (maxAP){
  document.querySelector("#max_point").textContent = "/" + maxAP
}
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
  End: function(){
    const end = document.querySelector('.end_bad')
    end.style.display = 'block'
  }
}
const item_panel = {
  random:function (max){
   return Math.floor(Math.random()*max)
  },
  displayitem: function(){
    let int = this.random(2)
    this.additem(PotionItem[int])
  },
  additem:function (itemList){
    const itemMenu = document.querySelector(".item_panel")
    let item = document.createElement('p')
    item.innerText = itemList.name
    item.id = itemList.name
    itemMenu.appendChild(item)
  },
  useItem: function (item){
    let i = PotionItem.find(element => element.name === item)
    if (i.type === 'healing'){
      addHealth(i)
    }
  },
  deleteItem: function (item){
    const itemMenu = document.getElementById(item.name)
    itemMenu.remove()
  }
}