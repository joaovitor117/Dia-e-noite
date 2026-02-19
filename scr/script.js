const toggleContainer = document.querySelector(".toggle-container")
const backgroundContainer = document.querySelector(".backgroud-container")

toggleContainer.addEventListener("click", () => {
    toggleContainer.classList.toggle ("dark");
    backgroundContainer.classList.toggle ("dark");
});