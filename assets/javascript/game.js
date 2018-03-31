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
    console.log(used_characters)

    //tallies the missed count
    console.log(tries_remaining);
    document.getElementById("tries-remaining").innerHTML = "Tries remaining    " + tries_remaining;

    //changes the instructions to good luck
    console.log(tries_remaining);
    document.getElementById("insturctions").innerHTML = "Good luck here you go!    ";

    document.getElementById("character-length").innerHTML = "Your word has    " + word_length + "  letters";
    document.getElementById("character-no").innerHTML = "Your word is something played a band";
}
//--------------------------------------------------------------
//number of characters
var n = thing.length;
var word_length = n
console.log(n + "  letters in word")

//--------------------------------------------------------------
//create spaces
var spaces = [];
for (var i = 0; i < thing.length; i++) {
    spaces[i] = "_";
    console.log(spaces + "  array spaces for word")

    //----------------------------------------------------------
    //changes the html to show word spaces
    document.getElementById("character-spaces").innerHTML = spaces;
    console.log(n)
    

    //----------------------------------------------------------
    update_try(used_characters, tries_remaining, n, thing, "")

    //----------------------------------------------------------
    //key stroke events
    document.onkeyup = function (event) {
        var letter = String.fromCharCode(event.which).toLowerCase();

        for (var j = 0; j < n; j++) {

            if (thing[j] === letter) {
                correct_letter++;
                console.log(correct_letter + "   correct letter count")
            }
        }
        for (var i = 0; i < thing.length; i++) {


            //----------------------------------------------------
            var first_character = thing.charAt(i);
            console.log(first_character)
            if (letter === first_character) {
                spaces[i] = letter;
                n--
                console.log("correct letter count  " + n)

    
            }
            document.getElementById("character-spaces").innerHTML = spaces.join();
            console.log(n)
            if (letter === first_character) {
            
                if (n <= 0) {
                    console.log(spaces)
                    alert("you won!!!")
                }

               
            }
        }


        console.log(spaces)

        //---------------------------------------------------------------
        //open araay to store used characters
        if (picture === 10) {
            tries_remaining--
            update_try(tries_remaining)
            alert("Your Dead!! Press ok to start again.")
            window.location.reload()
        }


        if (used_characters.includes(letter) == false) {
            used_characters.push(letter);
            //tally count down from max number of tries
            if (thing.indexOf(letter) === -1) {
                tries_remaining--;
                picture++
                console.log(picture + "  picture count")
                $('.game--backdrop').removeClass("game--backdrop1").addClass('game--backdrop' + picture);


            }

        }
       
        update_try(used_characters, tries_remaining, n, thing, "")

    }// endonkeyup


};




