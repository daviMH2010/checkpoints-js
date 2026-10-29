function changeImage() {
    const img = document.getElementById("myImage");
    const coletarSrc = img.getAttribute("src");

    if (coletarSrc === "chocolate.jpg") {
        img.setAttribute("src", "joelho.jpg");
        img.setAttribute("alt", "joelho");
    }
    else if (coletarSrc === "joelho.jpg") {
        img.setAttribute("src", "chocolate.jpg");
        img.setAttribute("alt", "chocolate");
    }
}
