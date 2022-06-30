function Bubble() {
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N^2)";
    document.getElementById("Time_Best").innerText = "Ω(N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText = "O(1)";

    c_delay = 0;

    for (var i = 0; i < arraySize - 1; i++) {
        for (var j = 0; j < arraySize - i - 1; j++) {
            divUpdate(div[j], divSize[j], "yellow");//Color update

            if (divSize[j] > divSize[j + 1]) {
                divUpdate(div[j], divSize[j], "red");//Color update
                divUpdate(div[j + 1], divSize[j + 1], "red");//Color update

                var temp = divSize[j];
                divSize[j] = divSize[j + 1];
                divSize[j + 1] = temp;

                divUpdate(div[j], divSize[j], "red");//Height update
                divUpdate(div[j + 1], divSize[j + 1], "red");//Height update
            }
            divUpdate(div[j], divSize[j], "blue");//Color updat
        }
        divUpdate(div[j], divSize[j], "green");//Color update
    }
    divUpdate(div[0], divSize[0], "green");//Color update

    enableButtons();
}