function Insertion() {
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N^2)";
    document.getElementById("Time_Best").innerText = "Ω(N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText = "O(1)";

    c_delay = 0;

    for (var j = 0; j < arraySize; j++) {
        divUpdate(div[j], divSize[j], "yellow");//Color update

        var key = divSize[j];
        var i = j - 1;
        while (i >= 0 && divSize[i] > key) {
            divUpdate(div[i], divSize[i], "red");//Color update
            divUpdate(div[i + 1], divSize[i + 1], "red");//Color update

            divSize[i + 1] = divSize[i];

            divUpdate(div[i], divSize[i], "red");//Height update
            divUpdate(div[i + 1], divSize[i + 1], "red");//Height update

            divUpdate(div[i], divSize[i], "blue");//Color update
            if (i == (j - 1)) {
                divUpdate(div[i + 1], divSize[i + 1], "yellow");//Color update
            }
            else {
                divUpdate(div[i + 1], divSize[i + 1], "blue");//Color update
            }
            i -= 1;
        }
        divSize[i + 1] = key;

        for (var t = 0; t < j; t++) {
            divUpdate(div[t], divSize[t], "green");//Color update
        }
    }
    divUpdate(div[j - 1], divSize[j - 1], "green");//Color update

    enableButtons();
}