let arr = [1, 1, 0,
           0, 0, 2,
           2, 1, 0];

function visualisation() {
    for (let i = 0; i < 9; i++ ) {
        changeColor(i, arr[i]);
    }
} 

function changeColor(i, color) {
    if (color == 1) {
        document.getElementById(i).classList.toggle("pink_color");
    } else if (color == 2) {
        document.getElementById(i).classList.toggle("pink_green");
    } else {
        document.getElementById(i).classList.remove("color_pink");
        document.getElementById(i).classList.remove("color_green");
    }
}

function changeModel(i, color) {
    arr[i] = color;
}


