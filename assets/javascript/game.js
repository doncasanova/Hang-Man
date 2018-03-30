//------
//------
//random pick of band names
var things = ['harmonica', 'guitar', 'banjo', 'mandolin', 'piano', 'drum'];
var thing = things[Math.floor(Math.random() * things.length)];
console.log(thing)
var used_characters = [];
var tries_remaining = 10
var correct_letter = 0
var picture = 1
//--------------------------------------------------------------
function update_try(used_characters, tries_remaining, n, thing, init) {
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
    document.getElementById("character-no").innerHTML = "Word to find      " + thing + init;
}
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
    //-------------------------------------------------------------
    update_try(used_characters, tries_remaining, n, thing, "Game initialized")
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
for (var i = 0; i < thing.length; i++){


        //---------------------------------------------------------------
        var first_character = thing.charAt(i);
        console.log(first_character)
        if (letter === first_character) {
            spaces[i] = letter;
            n--
            // console.log("this is it" + n)
            // if (n <= 0){
            //     alert("you won!!!")
            // }
        }
        document.getElementById("character-spaces").innerHTML = spaces;
    }
       

        console.log(spaces)

        //player wins
        //         console.log("length  of word" + spaces.length)
        //         if (n <= 0){
        //             alert("you won!!!")
        //         }

        // console.log("this is it it" + n)

        //---------------------------------------------------------------
        //open araay to store used characters


        // $('.game--backdrop').css('background', 'url(hangman2.jpg) no-repeat');
        // $('.game--backdrop').css('background-size', '100% 100%');



        // function SwitchPic(pic) {
        //     var image = document.getElementsByClassName("game--backdrop");
        //      {
        //         image.src = "hangman2.jpg";
        //     } 
        // }



        if (used_characters.includes(letter) == false) {
            used_characters.push(letter);
            //tally count down from max number of tries
            if (thing.indexOf(letter) === -1) {
                tries_remaining--;
                picture++
                console.log(picture + "picture count")
                $('.game--backdrop').removeClass("game--backdrop1").addClass('game--backdrop' + picture);
                if (tries_remaining === 0) {

                    alert("Your Dead!! Press ok to start again.")
                    window.location.reload()
                }

            }
        }

        update_try(used_characters, tries_remaining, n, thing, "End of P")
    }


};





    // console.log(letter)






//picture of hangman as game progresses



