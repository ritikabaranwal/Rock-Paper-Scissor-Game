let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

choices.forEach((choice) => {
       choice.addEventListener("click", () => {
              const userChoice = choice.getAttribute("id");              
              console.log(userChoice, "was clicked");
              playGame(userChoice);
       })
})

const playGame = (userChoice) => {
       console.log("user choice =", userChoice);
       const compChoice = genCompChoice();
       console.log("comp choice =", compChoice)

       if(userChoice === compChoice){
              drawGame();
       }
       else{
              let userWin = true;
              if(userChoice === "rock"){
                     if(compChoice === "paper"){
                            userWin = false;
                     }
                     else{
                            userWin = true;
                     }
              }
              else if(userChoice === "paper"){
                     if(compChoice === "scissor"){
                            userWin = false;
                     }  
                     else{
                            userWin = true;
                     }            
              }

              else {
                     if(compChoice === "rock"){
                            userWin = false;
                     }    
                     else{
                            userWin = true;
                     }       
              }
              showWinner(userWin);
       }
}

const genCompChoice = () => {
       const options = ["rock", "paper", "scissor"]; 
       const randInd = Math.floor(Math.random() * 3);
       return options[randInd];
}

const drawGame = () => {
       console.log("Game was draw.");
       msg.innerText = "Game was draw. Play again!";
}

const showWinner = (userWin) => {
       if(userWin){
              userScore++;
              userScorePara.innerText = userScore;
              console.log("You Win!");
              msg.innerText = "You Win!";
       }
       else{
              compScore++;
              compScorePara.innerText = compScore
              console.log("You Lose!");
              msg.innerText = "You Lose!";
       }
}