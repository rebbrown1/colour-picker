var container = document.getElementById("container");

//pallet
var arr = [];

//background colour
var backgroundColour = "rgb(243, 236, 221)";

//heading colour
var headingColour = "#73E29B";

//colour picked for target
var picked

//to get the RGB display
var targetColour = document.getElementById("targetColour");

//message that can be empty, try again or correct
var message = document.getElementById("message");

//heading
var head = document.querySelector("h1");

//reset buttons
var button = document.querySelectorAll("button");
var reset = document.getElementById("Random");
var easy = document.getElementById("Easy");
var medium = document.getElementById("Medium");
var hard = document.getElementById("Hard");


init();

function init() {
    setGame(Math.floor(Math.random() * 7 + 3));

    //Button listen for reset of game
    reset.addEventListener("click", resetIn);
    easy.addEventListener("click", resetEasy);
    medium.addEventListener("click", resetMedium);
    hard.addEventListener("click", resetHard);

    //Resets the game to random
    function resetIn() {
        container.innerHTML = "";
        message.textContent = "";
        var noOfSquares = Math.floor(Math.random() * 7 + 3);
        setGame(noOfSquares);

        for (var i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = arr[i];
        }
    }

    //Resets the game to easy
    function resetEasy() {
        container.innerHTML = "";
        message.textContent = "";
        setGame(3);

        for (var i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = arr[i];
        }
    }

    //Resets the game to easy
    function resetMedium() {
        container.innerHTML = "";
        message.textContent = "";
        setGame(7);

        for (var i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = arr[i];
        }
    }

    //Resets the game to easy
    function resetHard() {
        container.innerHTML = "";
        message.textContent = "";
        setGame(12);

        for (var i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = arr[i];
        }
    }
}

//Function to set game
function setGame(noOfSquares) {

    for (var i = 0; i < noOfSquares; i++) {
        container.innerHTML += '<div class="square"></div>';
    }

    //generate random coloured palette
    arr = generateRandomColour(noOfSquares);

    //get target colour randomly from the array size
    picked = arr[randomPickedColourIndex()];

    //updating RGB display
    targetColour.textContent = picked;

    //Generates colourPallet
    function generateRandomColour(limit) {
        var colourPallet = [];
        for (var i = 0; i < limit; i++) {
            colourPallet.push(rgbGenerator());
        }

        return colourPallet;
    }

    //Generates an index number for pallet
    function randomPickedColourIndex() {
        return Math.floor(Math.random() * arr.length);
    }

    //Generates an RGB colour
    function rgbGenerator() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }

    //to get all the squares div
    var squares = document.getElementsByClassName("square");

    for (var i = 0; i < squares.length; i++) {
        //setting each square's colour
        squares[i].style.backgroundColor = arr[i];
        var dimensions = findDimension(noOfSquares) + "px";
        squares[i].style.width = dimensions;
        squares[i].style.height = dimensions;

        //adding event listener
        squares[i].addEventListener("click", function () {
            if (picked === this.style.backgroundColor) {
                message.textContent = "Correct";
                message.style.color = "steelblue";
                changeColour(this.style.backgroundColor);
            } else {
                message.textContent = "Try Again";
                message.style.color = "hotpink";
                this.style.backgroundColor = backgroundColour;
            }

        })

    }

        //Changes squares and heading to correct colour
        function changeColour(colour) {
            for (var i = 0; i < squares.length; i++) {
                squares[i].style.backgroundColor = colour;
            }
            head.style.background = 'none';
            head.style.backgroundColor = colour;
            reset.style.color = colour;
            easy.style.color = colour;
            medium.style.color = colour;
            hard.style.color = colour;
        }

        //Dimension of squares
        function findDimension(number) {
            if(number == 12) {
                return window.innerWidth*2/12 ;
            } else {
                return window.innerWidth/number;
            }
        }
}