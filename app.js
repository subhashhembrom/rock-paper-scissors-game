let user_score = 0;
let computer_score = 0;
 const choices = document.querySelectorAll(".choice");
 const msg = document.querySelector("#msg");
 const userScore = document.querySelector("#user_score");
 const compScore = document.querySelector("#comp_score");

 choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id") ;
        // console.log("choice was clicked", userChoice);
        playGame(userChoice);
    })
 })

 const playGame = (userChoice) =>{
    console.log ("user choice : ", userChoice);
    const compChoice = getComputerChoice();
    console.log ("computer choice : ", compChoice);

    if (userChoice == compChoice){
        drawMatch();
    }   
    else {
        let userWin = true;
        if(userChoice == "rock"){
           userWin = compChoice == "paper" ? false : true
        }
        else if (userChoice == "paper"){
            userWin = compChoice == "scissor" ? false : true;
        }
        else{
            userWin = compChoice == "rock" ? false : true;
        }
        showWinner(userWin);
    }
}
 const drawMatch = () =>{
    console.log (" Your Match is Draw ");
    msg.innerText= " Match was Draw . Play again ";
 }



 const getComputerChoice = () => {
    const option =[ "rock" ,"paper", "scissor"] ;
    const index = Math.floor(Math.random()*3);
    return option[index];
 }

   const showWinner = (userWin) => {
    if(userWin){
        user_score++;
        userScore.innerText=user_Score;
        // console.log(" You Win");
        msg.innerText= " You Win! ";
    }
    else{
        computer_score++;
       compScore.innerText=computer_score;
        // console.log(" You lose ");
        msg.innerText= " You Lose ";
    }
 }