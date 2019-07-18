//variables
let userScore = 0;
let computerScore =0;

//caching the dom
const user_score = document.getElementById("user-score");
const computer_score = document.getElementById("computer-score");
const results = document.querySelector(".results>p");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

//get computer's choice
function computerChoice(){
    let listChoice =['p','r','s'];
    let randomNumber = Math.floor(Math.random()*3);
    return listChoice[randomNumber];
}

//win function

function win (){
    //score increament 
    score = userScore++;
    user_score.innerHTML=`${score}`;
    results.innerHTML ='You win!!!';
    
    
    
}


//lose function
function lose(){
    //comp score increament
    compScore = computerScore++;
    computer_score.innerHTML=`${compScore}`;
    results.innerHTML='You lose!!';
}


//tie
function tie(){
    
}


//function game
function game(userchoice){
    let compAnswer = computerChoice();
    let sum = userchoice + compAnswer;
    
    console.log(sum);
    switch(sum){
        case'rs':
        case'pr':
        case'sp':
          win();
           break;
            
        case'ps':
        case'sr':
        case'rp':
          lose();
          break;
            
        case 'pp':
        case'ss':
        case'rr':
            
          tie();
        break;  
    }             
}
main();
//take user input
function main(){
    rock.addEventListener('click' ,function(){
    game('r');
});

paper.addEventListener('click',function(){
    game('p');
});

scissors.addEventListener('click',function(){
    game('s');
});
}






