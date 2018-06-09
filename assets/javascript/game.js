

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

//establishing initial variables
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

//function adding wins to win total
function loser(){
    alert ("You Lost!");
    losses++;
    $("#losses").text(losses);
    console.log("New loss total: " , losses);
    
}

//sets up click for jewel 1
$('#gemOne').on ('click', function(){
    yourTotal = yourTotal + num1;
    console.log("New userTotal= " + yourTotal);
//add number from click to your current total
$("#score").text(yourTotal);

    if (yourTotal == target){
        winner();
    }
    else if (yourTotal > target){
        loser();
    }
})       


//sets up click for jewel 2
$('#gemTwo').on ('click', function(){
    yourTotal = yourTotal + num2;
    console.log("New userTotal= " + yourTotal);
//add number from click to your current total
$("#score").text(yourTotal);

if (yourTotal == target){
    winner();
}
else if (yourTotal > target){
    loser();
}
})

//sets up click for jewel 3
$('#gemThree').on ('click', function(){
    yourTotal = yourTotal + num3;
    console.log("New userTotal= " + yourTotal);
//add number from click to your current total
$("#score").text(yourTotal);

if (yourTotal == target){
    winner();
}
else if (yourTotal > target){
    loser();
}
})

//sets up click for jewel 4
$('#gemFour').on ('click', function(){
    yourTotal = yourTotal + num4;
    console.log("New userTotal= " + yourTotal);
//add number from click to your current total
$("#score").text(yourTotal);

if (yourTotal == target){
    winner();
}
else if (yourTotal > target){
    loser();
}
})

//win conditions




