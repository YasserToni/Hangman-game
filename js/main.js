// Create letter
const letter = "abcdefghijklmnopqrstuvwxyzf";

// crate array form letter 
let letterArray = Array.from(letter)

//select letter container
let letterscContainer =document.querySelector(".letters") 

// loop in letterArray 
letterArray.forEach(letter => {
    // create span 
    let span = document.createElement("span");

    // create letter text node
    let letterText = document.createTextNode(letter);

    // Append letterText in span
    span.appendChild(letterText);

    // add class name to span
    span.className ='letter-box'

    // Append span in letter container
    letterscContainer.appendChild(span)
})

// object of words = category 
const words = { 
    Programing:["HTML" ,"CSS","Java script", "Php", "go" , "scala", "fort ern" ,"msql" , "python" ],
    Movies:["Prestige" ,"Inception","Parasite", "Interstellar", "whiplash" , "Memento", "Coco" ,"Up" ],
    People:["Yasser" ,"Fox","Jonuier", "Eslam", "Storx" , "Fawzy", "Hossam" ,"Mostafa" , "Abdo" ],
    counteries:["Syria" ,"Egypt","Palestine", "Yemen", "Bahrain" , "Qater" ],
}
// All keys in object 
let allKeys = Object.keys(words);
 // Random number depend on keys length
let randomProNumber = Math.floor(Math.random() * allKeys.length);

// category
let randomProName = allKeys[randomProNumber];

// category words 
let randomProValue = words[randomProName];

// random number depend on words 
let randomValueNumber = Math.floor(Math.random() * randomProValue.length)

// word in word 
let randomValueValue = randomProValue[randomValueNumber];

// set category info 
document.querySelector(".game-info .category .one").innerHTML = ` ${randomProName}  ` ;
// document.querySelector(".game-info .category .two").innerHTML = ` ${randomValueValue}` ;

// select letter guess elment 
let letterGuessContainer = document.querySelector(".letter-guess")

// convert chosen word to array 
let letterAndSpace = Array.from(randomValueValue);

// create span depend on words 
letterAndSpace.forEach(letter => {
    // Create empty span 
    let emptySpan = document.createElement("span");
    if (letter === " ") {
        // add class to span 
        emptySpan.className = `with-space`;
    }
    // add span to letterGuessContainer
    letterGuessContainer.appendChild(emptySpan);
})

// select all span 
let guessSpans = document.querySelectorAll(".letter-guess span")
    
// set the worng status
let theWrongStatus = 0;

// select the hang man draw
let theHangmanDraw = document.querySelector(".hangman-draw")

// Handel clicking on letter

// correct Number 
let correctNumber = 0;

document.addEventListener("click", (e) => {

        // set the chosen status
    let theStatus = false;

    if (e.target.className === 'letter-box') {
        // add classname to clicked letter 
        e.target.classList.add("clicked");

        // get clicked letter 
        let theClickLetter = e.target.innerHTML.toLowerCase();
        // chosen word 
        let chosenWord = Array.from(randomValueValue.toLowerCase())
        chosenWord.forEach((wordLetter, wordIndex) => {
            if (theClickLetter == wordLetter) {
                correctNumber++;
                if (correctNumber === randomValueValue.length) {
                    congratulation()
                    letterscContainer.classList.add('finshed') 
                }
                // set status to correct 
                theStatus = true
                guessSpans.forEach((span, spanIndex) => {

                    if (wordIndex === spanIndex) {

                        span.innerHTML = theClickLetter;
                    }
                })
            }
        })
        // out of loop
        
            // if letter is false
        if (theStatus !== true) {

            theWrongStatus++;

            theHangmanDraw.classList.add(`wrong-${theWrongStatus}`)
            // play fail sound
            document.getElementById("fail").play();
            if (theWrongStatus === 8) {
                // End game
                endGame();
                letterscContainer.classList.add('finshed') 
            } 
        } else {
            document.getElementById("success").play()
        }
    }
});
function endGame() {
    // create popup div
    let div = document.createElement("div")

    // creat text div 
    div.innerHTML = `Game Over , The word is <span class="result">${randomValueValue}</span>`
    // add class name to div
    div.className = 'popup'
     // append div to body 
    document.body.appendChild(div)
    document.getElementById("final-fail").play()

}
function congratulation() {
    // create popup div
    let div = document.createElement("div")

    // creat text div 
    div.innerHTML = `Congartulation`
    // add class name to div
    div.className = 'congratulation'
     // append div to body 
    document.body.appendChild(div)
    document.getElementById("congratulation").play()

}
let correct = document.getElementById("correct")
correct.addEventListener("click", () => {
    window.location.reload()
})
