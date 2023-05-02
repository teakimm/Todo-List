function handleClicks() {
    const modal = document.querySelector(".modalContent");
    document.addEventListener("click", e => {
        if(e.target.className === "newTask") {
            modal.style.display = "flex";
        }
    });
}
export {
    handleClicks
}