let arr = [0, 0, 0,
           0, 0, 0,
           0, 0, 0];

let count = 0;

function visualisation() {
    for (let i = 0; i < 9; i++ ) {
        changeColor(i, arr[i]);
    }
} 

function changeColor(i, color) {
    if (color == 1) {
        document.getElementById(i).classList.add("color_pink");
    } else if (color == 2) {
        document.getElementById(i).classList.add("color_green");
    } else {
        document.getElementById(i).classList.remove("color_pink");
        document.getElementById(i).classList.remove("color_green");
    }
}

function changeModel(i, color) {
    arr[i] = color;
    changeColor(i, color);
}

function controller(e) {
    if(!isColor(e)) {
        ++count;
        color = count % 2 + 1;
        changeModel(e.target.id, color);
    }
}

function addListeners() {
    for (let i = 0; i < 9; i++) {
        document.getElementById(i).addEventListener("click", e => controller(e));
    }
}   

addListeners();

function isColor(e) {
    return e.target.classList.contains("color_pink") || e.target.classList.contains("color_green") 
}




