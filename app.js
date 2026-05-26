let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".resetBtn");
let para=document.querySelector(".msg");
let newbtn=document.querySelector(".newgame");
let container=document.querySelector(".msgcontainer");
let turnO=true;
let winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];
let disableboxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
};
let enableboxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
        container.classList.add("hide");
    }
};
let matchMisssmatch
let resetGame=()=>{
    turnO=true;
    enableboxes();
};
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO)
        {
            box.innerText="O";
            box.style.color="green";
            turnO=false;
        }
        else{
            box.innerText="X";
            box.style.color="red";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

let showWinner=(winner)=>{
    para.innerText=`Congratulations , Winner is ${winner}`;
    container.classList.remove("hide");
    disableboxes();
}
let checkWinner=()=>{
    for(let pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!="" && pos2val!="" && pos3val!="")
        {
            if(pos1val===pos2val && pos1val===pos3val)
            {
                showWinner(pos1val);
            }
        }
    }
};
let missMatch=()=>{
    function checkDismiss(board) {
  const winningLines = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8], 
    [0,4,8],[2,4,6]          
  ];
  for (const [a,b,c] of winningLines) {
    if (board[a] && board[a] === board[b] && board[b] === board[c]) {
      return; 
    }
  }
  if (board.every(cell => cell !== null)) {
    console.log("Game dismiss");
  }
}
}
newbtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);