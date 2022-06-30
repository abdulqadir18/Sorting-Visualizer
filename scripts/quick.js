function Quick() {
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText = "O(N^2)";
    document.getElementById("Time_Average").innerText = "Θ(N log N)";
    document.getElementById("Time_Best").innerText = "Ω(N log N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText = "O(log N)";

    c_delay = 0;

    quickSort(0, arraySize - 1);

    enableButtons();
}

function quickPartition(start, end) {
    var i = start + 1;
    var piv = divSize[start];//make the first element as pivot element.
    divUpdate(div[start], divSize[start], "yellow");//Color update

    for (var j = start + 1; j <= end; j++) {
        //re-arrange the array by putting elements which are less than pivot on one side and which are greater that on other.
        if (divSize[j] < piv) {
            divUpdate(div[j], divSize[j], "yellow");//Color update

            divUpdate(div[i], divSize[i], "red");//Color update
            divUpdate(div[j], divSize[j], "red");//Color update

            var temp = divSize[i];
            divSize[i] = divSize[j];
            divSize[j] = temp;

            divUpdate(div[i], divSize[i], "red");//Height update
            divUpdate(div[j], divSize[j], "red");//Height update

            divUpdate(div[i], divSize[i], "blue");//Height update
            divUpdate(div[j], divSize[j], "blue");//Height update

            i += 1;
        }
    }
    divUpdate(div[start], divSize[start], "red");//Color update
    divUpdate(div[i - 1], divSize[i - 1], "red");//Color update

    var temp = divSize[start];//put the pivot element in its proper place.
    divSize[start] = divSize[i - 1];
    divSize[i - 1] = temp;

    divUpdate(div[start], divSize[start], "red");//Height update
    divUpdate(div[i - 1], divSize[i - 1], "red");//Height update

    for (var t = start; t <= i; t++) {
        divUpdate(div[t], divSize[t], "green");//Color update
    }

    return i - 1;//return the position of the pivot
}

function quickSort(start, end) {
    if (start < end) {
        //stores the position of pivot element
        var piv_pos = quickPartition(start, end);
        quickSort(start, piv_pos - 1);//sorts the left side of pivot.
        quickSort(piv_pos + 1, end);//sorts the right side of pivot.
    }
}