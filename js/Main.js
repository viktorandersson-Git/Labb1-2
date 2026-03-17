let pressedKeys = "";
window.addEventListener("keydown", (event) => {
    pressedKeys += event.key;
    if (pressedKeys.slice(-4) === "cool") {
        const modal = document.querySelector(".secret-mode");

        modal.style.display = "flex";

        pressedKeys = "";
    }
    document.querySelector(".secret-mode").addEventListener("click", () => {
        document.querySelector(".secret-mode").style.display = "none";
    });
});
document.querySelector(".secret-btn-color").addEventListener("click", () => {
    document.body.style.backgroundColor = "grey";
});
