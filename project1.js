//1 we need all the instance
let againBtn = document.querySelector(".again");
let number = document.querySelector(".number");
let guess = document.querySelector(".guess");
let checkBtn = document.querySelector(".check");
let score = document.querySelector(".score");
let highScore = document.querySelector(".highscore");
let msg = document.querySelector(".message");

//2. Generate ranom num btw 1 and 20
let randomNumber = Math.trunc(Math.random()*20)+1;

//2.1 craete  variable of score
let scr = 20;

//BUtton functionalities
//2 args in eventlistener => 1. event that we want to occur 2. callback
//3. check button func
checkBtn.addEventListener("click",()=>{
    let inputVal = Number(guess.value);
    console.log(randomNumber);
    // when we get input value it will be string
    //3.1 Input value is equal to random number
    if(inputVal === randomNumber){
        console.log("Value is correct")
        document.querySelector("body").style.backgroundColor = "green";
        msg.textContent = "You are correct";
        number.textContent = randomNumber;
    } else if(inputVal > randomNumber){
        scr-=1;
        score.textContent = scr;
        msg.textContent = "Too High";
    }
    else if(inputVal < randomNumber){
        scr-=1;
        score.textContent = scr;
        msg.textContent = "Too Low";
    }
    else{
        msg.textContent = "No Number";
    }
});
   
// againbutton 

againBtn.addEventListener("click",()=>{
    //1. reset score
    scr = 20;
    score.textContent = scr;
    //2. generate new random number
    randomNumber = Math.trunc(Math.random()*20)+1;
    //3. reset message
    msg.textContent = "Start guessing...";
    //4. reset number
    number.textContent = "?";
    //5. reset input field
    guess.value = "";
    //6. reset background color
    document.querySelector("body").style.backgroundColor = "#222";
}
);
    // console.log("Button clicked", randomNumber);

    // console.log(ra