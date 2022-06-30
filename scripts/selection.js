function Selection() {
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N^2)";
    document.getElementById("Time_Best").innerText = "Ω(N^2)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText = "O(1)";

    c_delay = 0;

    for (var i = 0; i < arraySize - 1; i++) {
        divUpdate(div[i], divSize[i], "red");//Color update

        index_min = i;

        for (var j = i + 1; j < arraySize; j++) {
            divUpdate(div[j], divSize[j], "yellow");//Color update

            if (divSize[j] < divSize[index_min]) {
                if (index_min != i) {
                    divUpdate(div[index_min], divSize[index_min], "blue");//Color update
                }
                index_min = j;
                divUpdate(div[index_min], divSize[index_min], "red");//Color update
            }
            else {
                divUpdate(div[j], divSize[j], "blue");//Color update
            }
        }

        if (index_min != i) {
            var temp = divSize[index_min];
            divSize[index_min] = divSize[i];
            divSize[i] = temp;

            divUpdate(div[index_min], divSize[index_min], "red");//Height update
            divUpdate(div[i], divSize[i], "red");//Height update
            divUpdate(div[index_min], divSize[index_min], "blue");//Color update
        }
        divUpdate(div[i], divSize[i], "green");//Color update
    }
    divUpdate(div[i], divSize[i], "green");//Color update

    enableButtons();
}
