//Array inputs
var arraySizeInput = document.getElementById('array-size');
var arrayGenerateInput = document.getElementById("array-generate");
var arraySpeedInput = document.getElementById("array-speed");

var arraySize = arraySizeInput.value;

var algos = document.querySelectorAll(".algos button");

var divSize = [];
var div = [];
var marginSize;
var container = document.getElementById("array-container");
container.style = "flex-direction:row";

//Array generation and updation.
arrayGenerateInput.addEventListener("click", generateArray);
arraySizeInput.addEventListener("input", updateArray);

//Function to generate array
function generateArray() {
    container.innerHTML = "";

    for (var i = 0; i < arraySize; i++) {
        //this is bar div size
        divSize[i] = Math.floor(Math.random() * 0.5 * (arraySizeInput.max - arraySizeInput.min)) + 10;
        //creating and adding div to container
        div[i] = document.createElement("div");
        container.appendChild(div[i]);
        //styling div according to size
        marginSize = 0.1;
        div[i].style = " margin:0% " + marginSize + "%; background-color:blue; width:" + (100 / arraySize - (2 * marginSize)) + "%; height:" + (divSize[i]) + "%;";
    }
}

//Function to update array
function updateArray() {
    arraySize = arraySizeInput.value;
    generateArray();
}

//Updating array everytime we load page
window.onload = updateArray();

//Running the appropriate algorithm clicked
for (var i = 0; i < algos.length; i++) {
    algos[i].addEventListener("click", runAlgo);
}

//Function to disable buttons when algo is running
function disableButtons() {
    for (var i = 0; i < algos.length; i++) {
        algos[i].classList = [];
        //adding styling when button locked
        algos[i].classList.add("locked");

        //disabling buttons
        algos[i].disabled = true;
        arraySizeInput.disabled = true;
        arrayGenerateInput.disabled = true;
        arraySpeedInput.disabled = true;
    }
}

function runAlgo() {
    disableButtons();

    this.classList.add("selected");
    switch (this.innerHTML) {
        case "Bubble": Bubble();
            break;
        case "Selection": Selection();
            break;
        case "Insertion": Insertion();
            break;
        case "Merge": Merge();
            break;
        case "Quick": Quick();
            break;
        case "Heap": Heap();
            break;
    }
}