let userScore=0;
let compScore=0;


const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score"); 

const genCompChoice = () =>{
    const options = ["rock","papers","scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
    //rock paper scissors
}

const drawGame = () => {
    msg.innerText="Game was draw :/";
    msg.style.backgroundColor = "#0B0033";
}

const showWinner = (userWin , userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win :)  Your ${userChoice} Beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else
    {
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Lose :( ${compChoice} Beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userChoice) => {
    //generates computer choice
    const compChoice = genCompChoice();
    if(userChoice===compChoice){
        //draw game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice==="rock"){
            //scissors,papers 
            userWin=compChoice=== "paper" ? false : true;
        }else if (userChoice==="paper"){
            //rock, scissors
            userWin= compChoice==="scissors" ? false : true;
        }else {
            //rock,paper
            userWin=compChoice==="rock" ? false:true;
        }
        showWinner(userWin , userChoice, compChoice);
    }
};


choices.forEach((choice)=>{
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});