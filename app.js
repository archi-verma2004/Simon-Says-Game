let gameSeq=[];
let userSeq=[];

let colors=["red","green","yellow","purple"];
let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game started");
        started=true;
    }
    levelUp();
   
})

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    //for selecting random btn
    let btnIdn=Math.floor(Math.random()*3);
    let randomColor=colors[btnIdn];
    let randomBtn=document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    // console.log(btnIdn);
    // console.log(randomColor);
    // console.log(randomBtn);
    gameFlash(randomBtn);
}

function checkAns(idx){
    // console.log("current level: ",level);
    // let idx=level-1;
    if(gameSeq[idx]===userSeq[idx]){
        // console.log("same value");
        if(gameSeq.length==userSeq.length){
          setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over !!! Your score was <b> ${level} </b> <br>Press any key to restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },250);
        reset();
    }
    
}

function btnPress(){
    let btn=this;
    userFlash(btn);

    let userColor=btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
   btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    level=0;
    userSeq=[];
    gameSeq=[];
}

//simon
