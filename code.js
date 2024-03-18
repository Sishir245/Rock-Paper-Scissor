// rock, paper, scissors
let userScore=0;
let compScore=0;
let btn = document.querySelector(".resetbtn");
let choices=document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#computer-score");

const playGame = (userChoice) =>{
    const compChoice= genCompChoice();
    if(userChoice==compChoice){
        msg.style.backgroundColor = "bisque";
        msg.innerText = `Draw...Choose again.`;  
    }
    else{
        let userWin = true;
        if(userChoice==="Rock"){
            userWin = compChoice === "Paper" ? false : true;
        }   else if(userChoice==="Paper"){
            userWin= compChoice === "Scissor" ? false : true;
        }else{
            userWin=compChoice==="Rock"? false: true;
        } 
        showWinner(userWin, userChoice, compChoice );   
    }
}
const resetButton=()=>{
    userScore=0;
    compScore=0;
    userScorePara.innerText=0;
    compScorePara.innerText=0;
    msg.innerText="";
    btn.classList.add("hide");
}
const genCompChoice = ()=>{
    const options=["Rock","Paper","Scissor"];
    let ranIdx=Math.floor(Math.random()*3);
    return options[ranIdx];
}
const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.style.backgroundColor="Green";
        msg.innerText = `${userChoice} beats ${compChoice}...Congratulation!!! You Win.`; 
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.style.backgroundColor="red";
        msg.innerText = `${compChoice} beats ${userChoice}...You lost**Better luck next time.`;  
    }
}
choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
    btn.classList.remove("hide");
    msg.innerText = "";
    playGame(userChoice);

    });
});
btn.addEventListener("click",resetButton);