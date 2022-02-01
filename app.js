let header = document.querySelector("header");
let headerLogo = document.querySelector("header div");
let headerTageA = document.querySelectorAll("header nav ul li a");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 0) {
        headerLogo.style.backgroundColor = "white";
        header.style.backgroundColor = "RGB(0, 0, 0, 0.8)";
        header.style.color = "black";
        headerLogo.style.marginLeft = "0";
        headerTageA.forEach( a => {
            a.style.color = "white";
        });
    } else {
        header.style = "";
        headerLogo.style = "";
        headerTageA.forEach( a => {
            a.style = "";
        });
    }
});