let display = document.getElementById("display");
let randomFirstNumber = Math.floor(Math.random()*100); //prints random number between 0 - 100
console.log(randomFirstNumber);
let randomSecondNumber = Math.floor(Math.random()*100); //prints random number between 0 - 100
console.log(randomSecondNumber);
let operator = ["*", "/", "+", "-"]; //math operators
let random = Math.floor(Math.random()*4); //get a random number that is going to be used to access the operator array
let randomOperator = operator[random]; // access the operator array
console.log(randomOperator);
display.innerHTML = randomFirstNumber + " " + randomOperator + " " + randomSecondNumber;
let result = 0;
if(randomOperator == "*"){
    result = Math.round(randomFirstNumber * randomSecondNumber);
    console.log(result);
}else if(randomOperator == "/"){
    result = Math.round(randomFirstNumber / randomSecondNumber);
    console.log(result);
}else if(randomOperator == "+"){
    result = (randomFirstNumber + randomSecondNumber);
    console.log(result);
}else if(randomOperator == "-"){
    result = Math.round(randomFirstNumber - randomSecondNumber);
    console.log(result);
}else{
    console.log("Error! reload page")
}
let score = 0;
let highScore = 0;
let disHighScore = document.getElementById("highscore");
let disScore = document.getElementById("score");

function start(){
    let display = document.getElementById("display");
    let randomFirstNumber = Math.floor(Math.random()*100); //prints random number between 0 - 100
    console.log(randomFirstNumber);
    let randomSecondNumber = Math.floor(Math.random()*100); //prints random number between 0 - 100
    console.log(randomSecondNumber);
    let operator = ["*", "/", "+", "-"]; //math operators
    let random = Math.floor(Math.random()*4); //get a random number that is going to be used to access the operator array
    let randomOperator = operator[random]; // access the operator array
    console.log(randomOperator);
    display.innerHTML = randomFirstNumber + " " + randomOperator + " " + randomSecondNumber;
    if(randomOperator == "*"){
        result = Math.round(randomFirstNumber * randomSecondNumber);
        console.log(result);
    }else if(randomOperator == "/"){
        result = Math.round(randomFirstNumber / randomSecondNumber);
        console.log(result);
    }else if(randomOperator == "+"){
        result = (randomFirstNumber + randomSecondNumber);
        console.log(result);
    }else if(randomOperator == "-"){
        result = Math.round(randomFirstNumber - randomSecondNumber);
        console.log(result);
    }else{
        console.log("Error! reload page")
    }
}



let input = document.getElementById("input");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    console.log(parseInt(input.value));

    check();
    input.value = "";
    start();
})

let show = document.getElementById("show");

function check(){
    console.log("Result: " + result);
    console.log("Input: " + input.value);
    if(parseInt(input.value) === result){
        score += 1;
        console.log("score: " + score)
        disScore.textContent = "Score: " + score;
        console.log("Winner");
        show.innerHTML = "Correct: " + result;
        show.style.color = "green";
        if(score > highScore){
            highScore = score;
        }
        disHighScore.textContent = "HighScore: " + highScore;
    }else{
        score = 0;
        console.log("score: " + score)
        disScore.textContent = "Score: " + score;
        console.log("Lose");
        show.innerHTML = "Wrong: " + result;
        show.style.color = "red";
    }
}


