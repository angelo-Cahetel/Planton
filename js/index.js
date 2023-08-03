document.addEventListener("mouseup", function() {
    var selection = window.getSelection().toString().trim();
    var element = document.querySelector(".highlight");
    
    if (selection && element) {
        if (selection === element.textContent.trim()) {
            element.classList.add("highlight");
        } else {
            element.classList.remove("highlight");
        }
    }
});