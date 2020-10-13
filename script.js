let arr = [0, 1, 2, 
           3, 4, 5,
           6, 7, 8];

for (let i = 1; i < 10; i++) {
    let elem = document.getElementById(i);
    elem.addEventListener("click", () => {
        elem.classList.toggle("color_pink");
});
}


