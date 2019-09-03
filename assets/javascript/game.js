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
    var random = Math.floor(Math.random() * (+max - +min)) + +min;
    return random
    }

var start = function (){
targetNum = makeNum(19, 120);
chrystal1 = makeNum(1, 12);
chrystal2 = makeNum(1, 12);
chrystal3 = makeNum(1, 12);
chrystal4 = makeNum(1, 12);}
//assign each chrystal to its button 
$('#ruby-btn').click(function(){currentNum = currentNum + chrystal1});
$('#emerald-btn').click(function(){currentNum = currentNum + chrystal1});
$('#sapphire-btn').click(function(){currentNum = currentNum + chrystal1});
$('#amber-btn').click(function(){currentNum = currentNum + chrystal1});
//write target number into its box

//write current number into its box

//if a chrystal is clicked add its value to current number

//if current number === target number alert 'you win' and add 1 win to counter

//else alert 'you lose' and add 1 loss


// $("#ruby-number")
// {

// }

// $("#emerald-number")
// {

// }

// $("#sapphire-number")
// {

// }

// $("#amber-number")
// {

// }
console.log(makeNum)
console.log(targetNum);
console.log(chrystal1);
console.log(chrystal2);
console.log(chrystal3);
console.log(chrystal4);
console.log(currentNum);

