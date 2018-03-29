//------
//------
//random pick of band names
var things = ['harmonica', 'guitar', 'banjo', 'mandolin', 'piano', 'drum'];
var thing = things[Math.floor(Math.random() * things.length)];
console.log(thing)
var used_characters = [];
var tries_remaining = 5
var correct_letter = 0

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

        for (var j = 0; j < n; j++) {

            if (thing[j] === letter) {
                correct_letter++;
                console.log(correct_letter + "   correct letter count")
            }
        }

        //---------------------------------------------------------------
        var first_character = thing.charAt(0);
        console.log(first_character)
        if (letter === first_character) {
            spaces[0] = letter;
            n--
            // console.log("this is it" + n)
            // if (n <= 0){
            //     alert("you won!!!")
            // }
        }
        document.getElementById("character-spaces").innerHTML = spaces;
        var second_character = thing.charAt(1);
        console.log(second_character)
        if (letter === second_character) {
            spaces[1] = letter;
            n--
            // if (n <= 0){
            //     alert("you won!!!")
            // }
        }
        document.getElementById("character-spaces").innerHTML = spaces;
        var third_character = thing.charAt(2);
        console.log(third_character)
        if (letter === third_character) {
            spaces[2] = letter;
            n--
            // if (n <= 0){
            //     alert("you won!!!")
            // }
        }
        document.getElementById("character-spaces").innerHTML = spaces;
        var forth_character = thing.charAt(3);
        console.log(forth_character)
        if (letter === forth_character) {
            spaces[3] = letter;
            n--
            // if (n <= 0){
            //     alert("you won!!!")
            // }
        }
        document.getElementById("character-spaces").innerHTML = spaces;
        var fifth_character = thing.charAt(4);
        console.log(fifth_character)
        if (letter === fifth_character) {
            spaces[4] = letter;
            n--
            // if (n <= 0){
            //     alert("you won!!!")
            // }
        }
        document.getElementById("character-spaces").innerHTML = spaces;
        var sixth_character = thing.charAt(5);
        console.log(sixth_character)
        if (letter === sixth_character) {
            spaces[5] = letter;
            n--
            // if (n <= 0){
            //     alert("you won!!!")
            // }
        }
        document.getElementById("character-spaces").innerHTML = spaces;
        var seventh_character = thing.charAt(6);
        console.log(seventh_character)
        if (letter === seventh_character) {
            spaces[6] = letter;
            n--
            // if (n <= 0){
            //     alert("you won!!!")
            // }
        }
        document.getElementById("character-spaces").innerHTML = spaces;
        var eight_character = thing.charAt(7);
        console.log(eight_character)
        if (letter === eight_character) {
            spaces[7] = letter;
            n--
            // if (n <= 0){
            //     alert("you won!!!")
            // }
        }
        document.getElementById("character-spaces").innerHTML = spaces;
        var nine_character = thing.charAt(7);
        console.log(nine_character)
        if (letter === nine_character) {
            spaces[7] = letter;
            n--
            // if (n <= 0){
            //     alert("you won!!!")
            // }
        }
        document.getElementById("character-spaces").innerHTML = spaces;
        var ten_character = thing.charAt(7);
        console.log(ten_character)
        if (letter === ten_character) {
            spaces[7] = letter;
            n--
            // if (n <= 0){
            //     alert("you won!!!")
            // }
        }
        document.getElementById("character-spaces").innerHTML = spaces;
        console.log(spaces)

        //player wins
        //         console.log("length  of word" + spaces.length)
        //         if (n <= 0){
        //             alert("you won!!!")
        //         }

        // console.log("this is it it" + n)

        //---------------------------------------------------------------
        //open araay to store used characters




        if (used_characters.includes(letter) == false) {
            used_characters.push(letter);
            //tally count down from max number of tries
            if (thing.indexOf(letter) === -1) {
                tries_remaining--;
                if (tries_remaining === 0) {

                    alert("Your Dead!! Press ok to start again.")
                    window.location.reload()
                }

            }
        }

        //used charactor list
        var length = used_characters.length;
        document.getElementById("used-characters").innerHTML = used_characters;
        console.log(used_characters)

        //tallies the missed count
        console.log(tries_remaining);
        document.getElementById("tries-remaining").innerHTML = "Tries remaining    " + tries_remaining;

        //changes the instructions to good luck
        console.log(tries_remaining);
        document.getElementById("insturctions").innerHTML = "Good luck here you go!    ";

        document.getElementById("character-length").innerHTML = "Your word has    " + n + "  letters";
        document.getElementById("character-no").innerHTML = "Word to find     " + thing;
    }


};





    // console.log(letter)






//picture of hangman as game progresses



