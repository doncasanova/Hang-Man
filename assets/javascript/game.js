//random pick of band names
var things = ['rock', 'Paper', 'Scissor'];
var thing = things[Math.floor(Math.random() * things.length)];
console.log(thing)


//number of characters
var n = thing.length;
console.log(n)


//set number of spaces to be used "character count"
function myFunction() {
    // var str = thing;
    var n = thing.length;
    document.getElementById("character-no").innerHTML = thing;
    console.log(thing)

}


//user guess letters using keypad
document.onkeyup = function (event) {
    var letter = String.fromCharCode(event.which).toLowerCase();
    // Determines which key was pressed.
    // var userCommand = letter;
var tries_remaining = 25

    document.getElementById("tries-remaining").innerHTML = "Tries remaining    " + tries_remaining;
    document.getElementById("character-length").innerHTML = "Number of letters in word    " + n;
    document.getElementById("character-no").innerHTML ="Word to find     " + thing;
    console.log(letter)
}



//picture of hangman as game progresses

//tally count down from max number of tries

//used charactor list 



