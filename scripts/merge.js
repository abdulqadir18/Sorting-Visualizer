function Merge() {
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText = "O(N log N)";
    document.getElementById("Time_Average").innerText = "Θ(N log N)";
    document.getElementById("Time_Best").innerText = "Ω(N log N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText = "O(N)";

    c_delay = 0;

    mergePartition(0, arraySize - 1);

    enableButtons();
}

function mergeSort(start, mid, end) {
    var p = start, q = mid + 1;

    var Arr = [], k = 0;

    for (var i = start; i <= end; i++) {
        if (p > mid) {
            Arr[k++] = divSize[q++];
            divUpdate(div[q - 1], divSize[q - 1], "red");//Color update
        }
        else if (q > end) {
            Arr[k++] = divSize[p++];
            divUpdate(div[p - 1], divSize[p - 1], "red");//Color update
        }
        else if (divSize[p] < divSize[q]) {
            Arr[k++] = divSize[p++];
            divUpdate(div[p - 1], divSize[p - 1], "red");//Color update
        }
        else {
            Arr[k++] = divSize[q++];
            divUpdate(div[q - 1], divSize[q - 1], "red");//Color update
        }
    }

    for (var t = 0; t < k; t++) {
        divSize[start++] = Arr[t];
        divUpdate(div[start - 1], divSize[start - 1], "green");//Color update
    }
}

function mergePartition(start, end) {
    if (start < end) {
        var mid = Math.floor((start + end) / 2);
        divUpdate(div[mid], divSize[mid], "yellow");//Color update

        mergePartition(start, mid);
        mergePartition(mid + 1, end);

        mergeSort(start, mid, end);
    }
}