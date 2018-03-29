//------
//------
//random pick of band names
var things = ['rock', 'paper', 'scissor'];
var thing = things[Math.floor(Math.random() * things.length)];
console.log(thing)

//---------------------------------------------------------------
//number of characters
var n = thing.length;
console.log(n)

//--------------------------------------------------------------
//create spaces
var spaces = [];
for (var i = 0; i < n; i++) {
    spaces[i] = "_";
    console.log(spaces)

    document.getElementById("character-spaces").innerHTML = spaces;

    //--------------------------------------------------------------
    //key stroke events
         document.onkeyup = function (event) {
        var letter = String.fromCharCode(event.which).toLowerCase();
         
        
        //------------------------------------------------------------
        //create while loop
        while (n > 0){
          //---------------------------------------------------------------
        var first_character = thing.charAt(0);
        console.log(first_character)
        if (letter === first_character) {
            spaces[0] = letter;
            n--;
        }
        document.getElementById("character-spaces").innerHTML = spaces;
        var second_character = thing.charAt(1);
        console.log(second_character)
        if (letter === second_character) {
            spaces[1] = letter;
            n--;
        }
        document.getElementById("character-spaces").innerHTML = spaces;
        var third_character = thing.charAt(2);
        console.log(third_character)
        if (letter === third_character) {
            spaces[2] = letter;
            n--;
        }
        document.getElementById("character-spaces").innerHTML = spaces;
        var forth_character = thing.charAt(3);
        console.log(forth_character)
        if (letter === forth_character) {
            spaces[3] = letter;
            n--;
        }
        document.getElementById("character-spaces").innerHTML = spaces;
        var fifth_character = thing.charAt(4);
        console.log(fifth_character)
        if (letter === fifth_character) {
            spaces[4] = letter;
            n--;
        }
        document.getElementById("character-spaces").innerHTML = spaces;
        var sixth_character = thing.charAt(5);
        console.log(sixth_character)
        if (letter === sixth_character) {
            spaces[5] = letter;
            n--;
        }
        document.getElementById("character-spaces").innerHTML = spaces;
        var seventh_character = thing.charAt(6);
        console.log(seventh_character)
        if (letter === seventh_character) {
            spaces[6] = letter;
            n--;
        }
        document.getElementById("character-spaces").innerHTML = spaces;
        var eight_character = thing.charAt(7);
        console.log(eight_character)
        if (letter === eight_character) {
            spaces[7] = letter;
            n--;
        }
        document.getElementById("character-spaces").innerHTML = spaces;
        console.log(spaces)



        //---------------------------------------------------------------
        //open araay to store used characters
        var used_characters = "";
        used_characters += letter;
        




        var length = used_characters.length;
        document.getElementById("used-characters").innerHTML = used_characters;
        console.log(used_characters)
    }

    var clicked = false;

    function SwitchPic(pic) {
        var image = document.getElementById(pic);
        if(!clicked){
            image.src = "otherImg.png";
            clicked = true;
        }else{
            image.src = "img.png";
            clicked = false;
        }


};


var clicked = false;

function SwitchPic(pic) {
    var image = document.getElementById(pic);
    if(!clicked){
        image.src = "otherImg.png";
        clicked = true;
    }else{
        image.src = "img.png";
        clicked = false;
    }
}



var tries_remaining = 25

document.getElementById("tries-remaining").innerHTML = "Tries remaining    " + tries_remaining;
document.getElementById("character-length").innerHTML = "Number of letters in word    " + n;
document.getElementById("character-no").innerHTML = "Word to find     " + thing;
    // console.log(letter)

   n--;

        }
        //loop end
       




//picture of hangman as game progresses

//tally count down from max number of tries

//used charactor list 