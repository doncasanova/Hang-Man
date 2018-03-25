//random pick of band names
var things = ['rock', 'Paper', 'Scissor'];
var thing = things[Math.floor(Math.random() * things.length)];
console.log(thing)


//number of characters
var n = thing.length;
console.log(n)


//create spaces

var spaces = [];
for (var i = 0; i < n; i++){
    spaces[i] = "_";
    console.log (spaces)
    document.getElementById("character-spaces").innerHTML = spaces;
    document.onkeyup = function (event) {
        var letter = String.fromCharCode(event.which).toLowerCase();

    spaces [0] = letter, 
    document.getElementById("character-spaces").innerHTML = spaces;
    // spaces[1] = letter, 
    // document.getElementById("character-spaces").innerHTML = spaces;
    // spaces[2] = letter, 
    // document.getElementById("character-spaces").innerHTML = spaces;
    // spaces[3] = letter, 
    // document.getElementById("character-spaces").innerHTML = spaces;
    // spaces[4] = letter, 
    // document.getElementById("character-spaces").innerHTML = spaces;
    // spaces[5] = letter;
    // document.getElementById("character-spaces").innerHTML = spaces;
    console.log (spaces)
}



//set number of spaces to be used "character count"
function myFunction() {
    // var str = thing;
    var n = thing.length;
    document.getElementById("character-no").innerHTML = thing;
    console.log(thing)
}


//user guess letters using keypad
// document.onkeyup = function (event) {
//     var letter = String.fromCharCode(event.which).toLowerCase();
    // Determines which key was pressed.
    // var userCommand = letter;
var tries_remaining = 25

    document.getElementById("tries-remaining").innerHTML = "Tries remaining    " + tries_remaining;
    document.getElementById("character-length").innerHTML = "Number of letters in word    " + n;
    document.getElementById("character-no").innerHTML ="Word to find     " + thing;
    // console.log(letter)
}

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// document.getElementById("demo1").innerHTML = fruits;
// fruits[0] = "Kiwi";
// document.getElementById("demo2").innerHTML = fruits;



//picture of hangman as game progresses

//tally count down from max number of tries

//used charactor list 



