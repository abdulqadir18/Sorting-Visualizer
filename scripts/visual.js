var speed = 1000;

arraySpeedInput.addEventListener("input", visSpeed);

function visSpeed() {
    var arraySpeed = arraySpeedInput.value;
    switch (parseInt(arraySpeed)) {
        case 1: speed = 1;
            break;
        case 2: speed = 10;
            break;
        case 3: speed = 100;
            break;
        case 4: speed = 1000;
            break;
        case 5: speed = 10000;
            break;
    }

    delayTime = 10000 / (Math.floor(arraySize / 10) * speed);
}

var delayTime = 10000 / (Math.floor(arraySize / 10) * speed);//Decrease numerator to increase speed.
var c_delay = 0;//This is updated ov every div change so that visualization is visible.

function divUpdate(container, height, color) {
    window.setTimeout(function () {
        container.style = " margin:0% " + marginSize + "%; width:" + (100 / arraySize - (2 * marginSize)) + "%; height:" + height + "%; background-color:" + color + ";";
    }, c_delay += delayTime);
}

function enableButtons() {
    window.setTimeout(function () {
        for (var i = 0; i < algos.length; i++) {
            algos[i].classList = [];
            algos[i].classList.add("unselected");

            algos[i].disabled = false;
            arraySizeInput.disabled = false;
            arrayGenerateInput.disabled = false;
            arraySpeedInput.disabled = false;
        }
    }, c_delay += delayTime);
}
