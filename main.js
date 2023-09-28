let smallContent = document.getElementById("smallscreen");
let bigContent = document.getElementById("bigscreen");

function detectScreenSize() {
    let smallScren = true;
    if (window.screen.availWidth >= 992) {
        smallScren = false;
    }

    smallContent.style.display = "grid";
    bigContent.style.display = "none";
    if (!smallScren) {
        smallContent.style.display = "none";
        bigContent.style.display = "grid";
    }
}

window.onresize = function() {
    detectScreenSize()
}

detectScreenSize()