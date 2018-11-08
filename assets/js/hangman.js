// Create an Array of Words
var doubleWord = [
    'a' , 'b', 'c', 'd', 'e',
    'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 
    'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z'
];
var tribeGreats = [
    // "FELLER", 
    // "THOME", 
    // "LOFTON", 
    // "ALOMAR", 
    // "BARKER", 
    // "BELLE", 
    // "CARTER",
    // "LEMON",
    // "BOUDREAU",
    // "DOBY",
    // "SPEAKER",
    // "VIZQUEL",
    "feller", 
    "thome", 
    "lofton", 
    "alomar", 
    "barker", 
    "belle", 
    "carter",
    "lemon",
    "boudreau",
    "doby",
    "speaker",
    "vizquel",
];

// Variables Needed
var chosenWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndRight = [];
var wrongLetters = [];
var winCount = 0;
var loseCount = 0;
var guessesLeft = 9;
var rightGuessCounter = 0;

// To restart game 

function reset()    {
    chosenWord = tribeGreats[Math.floor(Math.random() * tribeGreats.length)];
    lettersInWord = chosenWord.split("");
    numBlanks = lettersInWord.length;

    letterGuessed = 0;
    rightGuessCounter = 0;
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndRight = [];
    doubleWord = [
        'a' , 'b', 'c', 'd', 'e',
        'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o', 
        'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y', 'z'
    ];
    test=false;
    startGame();
    
}

// Start of the Game

function startGame() {
    chosenWord = tribeGreats[Math.floor(Math.random() * tribeGreats.length)];
    lettersInWord = chosenWord.split("");
    numBlanks = lettersInWord.length;

    letterGuessed = 0;
    rightGuessCounter = 0;
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndRight = [];
    doubleWord = [
        'a' , 'b', 'c', 'd', 'e',
        'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o', 
        'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y', 'z'
    ];

for (var i = 0; i < numBlanks; i++)
{
    blanksAndRight.push("_");
    document.getElementById("wordToGuess").innerHTML = blanksAndRight;
}
// Makes display changes
    document.getElementById('wordToGuess').innerHTML = blanksAndRight.join(' ');
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = winCount;
    document.getElementById("lossCounter").innerHTML = loseCount;
    document.getElementById("wrongGuesses").innerHTML = wrongLetters;

// For Testing
    console.log(chosenWord);
    console.log(lettersInWord);
    console.log(numBlanks);
    console.log(blanksAndRight);
}

function compareLeters(userkey) 
{
    if(chosenWord.indexOf(userkey) > -1)
    {
        for(var i = 0; i < numBlanks; i++) 
        {
            if(lettersInWord[i] === userkey) 
            {
                rightGuessCounter++;
                blanksAndRight[i] = userkey;
                document.getElementById("wordToGuess").innerHTML = blanksAndRight.join(" ");
            }
        }
    }
    else
    {
        wrongLetters.push(userkey);
        guessesLeft--;
        document.getElementById("numGuesses").innerHTML = guessesLeft;
        document.getElementById("wrongGuesses").innerHTML = wrongLetters;
    }

}

function winLose()
{
    if(rightGuessCounter === numBlanks)
    {
        winCount++;
        document.getElementById("winCounter").innerHTML = winCount;
        alert("You Win! It was " + (chosenWord) + "!");
        reset();
    }
    else if(guessesLeft === 0)
    {
        loseCount++;
        document.getElementById("lossCounter").innerHTML = loseCount;
        alert("There's always next game.");
        reset();
    }
}

startGame ();

document.onkeyup = function(event)
{
    test = true;
    var letterGuessed = event.key;
    for (var i=0; i < doubleWord.length; i++)
    {
        if(letterGuessed === doubleWord[i] && test === true)
        {
            var splicedWord = doubleWord.splice(i,1);
            compareLeters(letterGuessed);
            winLose();
        }
    }
}