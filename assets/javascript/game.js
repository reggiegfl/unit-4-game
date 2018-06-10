

// returns a number between 20 and 120
var target = Math.floor(Math.random() *101) + 19;  
console.log (target);

// Setting up random numbers for each jewel
var num1= Math.floor(Math.random()*11+1);
var num2= Math.floor(Math.random()*11+1);
var num3= Math.floor(Math.random()*11+1);
var num4= Math.floor(Math.random()*11+1);
console.log("num 1 = ", num1, "num 2 = ", num2, "num 3 = ", num3, "num 4 = ", num4);

// displays the number to be achieved to the page
$("#goal").text(target);

//establishing initial global variables
var wins = 0;
var losses = 0;
var yourTotal = 0;

//writes totals for wins/losses/score at end of text from html
$("#wins").text(wins);
$("#losses").text(losses);
$("#score").text(yourTotal);
console.log("wins = ", wins, "losses = ", losses, "yourTotal = ", yourTotal);

//function adding wins to win total
function winner(){
    alert ("You Won!");
    wins++;
    $("#wins").text(wins);
    console.log("New win total: " , wins);

}

//function adding losses to loss total
function loser(){
    alert ("You Lost!");
    losses++;
    $("#losses").text(losses);
    console.log("New loss total: " , losses);    
}
function checkWinLoss (num){
    console.log(num);
    yourTotal = yourTotal + num;
    console.log("New userTotal= " + yourTotal);
    //add number from click to your current total
    $("#score").text(yourTotal);
    if (yourTotal == target){
        winner();
        resetGame ();    

    }
    else if (yourTotal > target){
        loser();
        resetGame ();    

    }
}

//sets up click for jewel 1
$('#gemOne').on ('click', function(){
    checkWinLoss(num1);   
})       

//sets up click for jewel 2
$('#gemTwo').on ('click', function(){
    checkWinLoss(num2);
})

//sets up click for jewel 3
$('#gemThree').on ('click', function(){
    checkWinLoss(num3);
})

//sets up click for jewel 4
$('#gemFour').on ('click', function(){
    checkWinLoss(num4);
})

//reset game function defined
function resetGame (){
    yourTotal = 0;
    target = Math.floor(Math.random() *101) + 19; 
    $("#score").text(yourTotal);
    console.log (target, "Your Total is: ", yourTotal);
    
    // Setting up random numbers for each jewel
    num1= Math.floor(Math.random()*11+1);
    num2= Math.floor(Math.random()*11+1);
    num3= Math.floor(Math.random()*11+1);
    num4= Math.floor(Math.random()*11+1);
    console.log("num 1 = ", num1, "num 2 = ", num2, "num 3 = ", num3, "num 4 = ", num4);
    
    // displays the number to be achieved to the page
    $("#goal").text(target);



}



