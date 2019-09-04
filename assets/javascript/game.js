//Variables==================================

var targetNum = 0
var chrystal1 = 0 
var chrystal2 = 0
var chrystal3 = 0
var chrystal4 = 0
var currentNum = 0
var win = 0
var loss = 0


//functions ====================================

var makeNum = function (min, max){
    // var random = Math.random() * (+max - +min) + +min; 
    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    return random
    }
var numberTracker = function (addToNumber){
    $('#current-number').text(addToNumber);
}

var counter = function (chosenNumber) {
    currentNum = currentNum + chosenNumber;
}

var compareNumbers = function (currentNumber, targetNumber) {
    if (currentNumber === targetNumber) {
        alert('You win!');
        win++;
        
        $('.win').text(win);
        start();
    } else if (currentNumber > targetNumber) {
        alert('You lose!')
        loss++;

        $('.loss').text(loss);
        start();
    }
}

var gameplay = function(currentNumber, targetNumber, chosenNumber) {
    counter(chosenNumber)
    numberTracker(currentNumber);
    compareNumbers(currentNumber, targetNumber);
}


var start = function (){
targetNum = makeNum(19, 120);
chrystal1 = makeNum(1, 12);
chrystal2 = makeNum(1, 12);
chrystal3 = makeNum(1, 12);
chrystal4 = makeNum(1, 12);
currentNum = 0;
$('#current-number').text(currentNum);
$('#target-num').text(targetNum);
console.log(targetNum);
console.log(chrystal1);
console.log(chrystal2);
console.log(chrystal3);
console.log(chrystal4);
console.log(currentNum);
}

start();

//assign each chrystal to its button 
$('#ruby-btn').click(function() {
    gameplay(currentNum, targetNum, chrystal1);
 });
$('#emerald-btn').click(function(){
    gameplay(currentNum, targetNum, chrystal2);
});
$('#sapphire-btn').click(function(){
    gameplay(currentNum, targetNum, chrystal3);
});
$('#amber-btn').click(function(){
    gameplay(currentNum, targetNum, chrystal4);
});
//write target number into its box

//write current number into its box

//if a chrystal is clicked add its value to current number

//if current number === target number alert 'you win' and add 1 win to counter

//else alert 'you lose' and add 1 loss
