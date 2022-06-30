function Heap() {
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText = "O(N log N)";
    document.getElementById("Time_Average").innerText = "Θ(N log N)";
    document.getElementById("Time_Best").innerText = "Ω(N log N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText = "O(1)";

    c_delay = 0;

    heapSort();

    enableButtons();
}

function swap(i, j) {
    divUpdate(div[i], divSize[i], "red");//Color update
    divUpdate(div[j], divSize[j], "red");//Color update

    var temp = divSize[i];
    divSize[i] = divSize[j];
    divSize[j] = temp;

    divUpdate(div[i], divSize[i], "red");//Height update
    divUpdate(div[j], divSize[j], "red");//Height update

    divUpdate(div[i], divSize[i], "blue");//Color update
    divUpdate(div[j], divSize[j], "blue");//Color update
}

function maxHeapify(n, i) {
    var largest = i;
    var l = 2 * i + 1;
    var r = 2 * i + 2;

    if (l < n && divSize[l] > divSize[largest]) {
        if (largest != i) {
            divUpdate(div[largest], divSize[largest], "blue");//Color update
        }

        largest = l;

        divUpdate(div[largest], divSize[largest], "red");//Color update
    }

    if (r < n && divSize[r] > divSize[largest]) {
        if (largest != i) {
            divUpdate(div[largest], divSize[largest], "blue");//Color update
        }

        largest = r;

        divUpdate(div[largest], divSize[largest], "red");//Color update
    }

    if (largest != i) {
        swap(i, largest);

        maxHeapify(n, largest);
    }
}

function heapSort() {
    for (var i = Math.floor(arraySize / 2) - 1; i >= 0; i--) {
        maxHeapify(arraySize, i);
    }

    for (var i = arraySize - 1; i > 0; i--) {
        swap(0, i);
        divUpdate(div[i], divSize[i], "green");//Color update
        divUpdate(div[i], divSize[i], "yellow");//Color update

        maxHeapify(i, 0);

        divUpdate(div[i], divSize[i], "blue");//Color update
        divUpdate(div[i], divSize[i], "green");//Color update
    }
    divUpdate(div[i], divSize[i], "green");//Color update
}