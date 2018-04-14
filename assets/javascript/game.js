//------
//------
//random pick of band names
var things = ['harmonica', 'guitar', 'banjo', 'mandolin', 'piano', 'drum'];
var thing = things[Math.floor(Math.random() * things.length)];
//--------------------------------------------------------------
var used_characters = [];
var tries_remaining = 10
var correct_letter = 0
var picture = 1
//--------------------------------------------------------------
// updates text 
function update_try(used_characters, tries_remaining, n, thing, init) {
    //used charactor list
    var length = used_characters.length;
    document.getElementById("used-characters").innerHTML = used_characters;


    //tallies the missed count

    document.getElementById("tries-remaining").innerHTML = "Tries remaining    " + tries_remaining;

    //changes the instructions to good luck

    document.getElementById("insturctions").innerHTML = "Good luck here you go!    ";

    document.getElementById("character-length").innerHTML = "Your word has    " + word_length + "  letters";
    document.getElementById("character-no").innerHTML = "Your word is something played a band";
}
//--------------------------------------------------------------
//number of characters
var n = thing.length;
var word_length = n


//--------------------------------------------------------------
//create spaces
var spaces = [];
for (var i = 0; i < thing.length; i++) {
    spaces[i] = "_";


    //----------------------------------------------------------
    //changes the html to show word spaces
    document.getElementById("character-spaces").innerHTML = spaces;

    //----------------------------------------------------------
    update_try(used_characters, tries_remaining, n, thing, "")

    //----------------------------------------------------------
    //key stroke events
    document.onkeyup = function (event) {
        var letter = String.fromCharCode(event.which).toLowerCase();

        for (var j = 0; j < n; j++) {

            if (thing[j] === letter) {
                correct_letter++;

            }
        }
        for (var i = 0; i < thing.length; i++) {


            //----------------------------------------------------
            var first_character = thing.charAt(i);

            if (letter === first_character) {
                spaces[i] = letter;
                n--
            }
            document.getElementById("character-spaces").innerHTML = spaces.join();

            if (letter === first_character) {

                if (n <= 0) {
                    setTimeout(function () {
                        alert("you won!!!");
                    }, 50);
                }
            }
        }



        //---------------------------------------------------------------
        //open araay to store used characters
        if (picture === 10) {
            tries_remaining--
            setTimeout(function () {
                alert("Your Dead!! Press ok to start again.")
            }, 50);


            // window.location.reload()
        }


        if (used_characters.includes(letter) == false) {
            used_characters.push(letter);
            //tally count down from max number of tries
            if (thing.indexOf(letter) === -1) {
                tries_remaining--;
                picture++

                $('.game--backdrop').removeClass("game--backdrop1").addClass('game--backdrop' + picture);


            }

        }

        update_try(used_characters, tries_remaining, n, thing, "")

    }// endonkeyup


};




