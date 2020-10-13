// let arr = [0, 1, 2, 
//            3, 4, 5,
//            6, 7, 8];

// let pink = 'pink';
// let green = 'green';

for (let i = 1; i < 10; i++) {
    let elem = document.getElementById(i);
    elem.addEventListener("click", () => {
        if (i % 2 == 0) {
            elem.classList.toggle("color_pink");
        } else {
            elem.classList.toggle("color_green");
        }
});
}


