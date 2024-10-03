let box = document.querySelectorAll(".insidebox");
let turnx = true;
let header = document.querySelector(".first");
let winstate = document.querySelector(".win");
let newgame = document.querySelector(".newgame");
let reset = document.querySelector(".reset");
let draw=document.querySelector(".draw");
let pattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

let count = 0;
box.forEach((b) => {
  b.addEventListener("click", () => {
    count++;
    console.log(count);
    if (turnx) {
      b.innerText = "X";
      b.style.color = "blue";
      turnx = false;
       if(count==9){
          
          draw.innerText="Draw match please reset the game"
          draw.classList.remove("nodraw");
       }
    } else {
      b.innerText = "O";
      b.style.color = "blue";
      turnx = true;
      if(count==9){
          draw.innerText="Draw match please reset the game"
          draw.classList.remove("nodraw");
       }
    }
    b.disabled = true;
    checking();
  });
});
const enable=()=>{
    for(let bo of box){
    bo.disabled=false;
    bo.innerText="";
    }
}
const disable=()=>{
    for(let bo of box)
    bo.disabled=true;
}

const winner = (wi) => {
  winstate.innerText = `Congrats winner is ${wi}`;
  winstate.classList.remove("hide");
  disable();
 
};

const checking = () => {
  for (let p of pattern) {
    let p1 = box[p[0]].innerText;
    let p2 = box[p[1]].innerText;
    let p3 = box[p[2]].innerText;

    if (p1 != "" && p2 != "" && p3 != "") {
      if (p1 === p2 && p2 === p3 && p3 === p1) {
        console.log("winner is", p1);
        winner(p1);
      }
    }
  }
};
const btnfunction=()=>{
    turnx=true;
    count=0;
    winstate.classList.add("hide");
    draw.classList.add("nodraw");
    enable();
 

}
newgame.addEventListener("click",btnfunction);
reset.addEventListener("click",btnfunction)
