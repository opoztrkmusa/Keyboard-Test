document.addEventListener("keydown", function(event) {
    var keyPressed = event.key;
    if (keyPressed === " ") {
        document.getElementById("output").textContent = "Space";
    } else {
        document.getElementById("output").textContent = keyPressed;
    }

    if (event.key === "F5" || event.key === "F1" || event.key === "F3" || event.key === "F4" || event.key === "F6" || event.key === "F7" || event.key === "F10" || event.key === "F11" || event.key === "F12") {
        event.preventDefault();
    }

    if (event.key === "TAB") {
        event.preventDefault();
    }
});

document.addEventListener("mousedown", function(event) {
    var mouseButton = "";

    if (event.button === 0) {
        mouseButton = " Left Click";
    } else if (event.button === 1) {
        mouseButton = " Scroll Click";
    } else if (event.button === 2) {
        mouseButton = " Right Click";
    }

    document.getElementById("output").textContent = mouseButton;

    if (event.button === 2) {
        event.preventDefault();
    }
});

document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});