var toggle = document.getElementById("dark-mode-toggle");
var darkTheme = document.getElementById("dark-mode-theme");

toggle.addEventListener("click", () => {
    if (toggle.className === "fa fa-moon") {
        setTheme("dark");
    } else if (toggle.className === "fa fa-sun") {
        setTheme("light");
    }
});

// the default theme is light
var savedTheme = localStorage.getItem("dark-mode-storage") || "light";
setTheme(savedTheme);

function setTheme(mode) {
    localStorage.setItem("dark-mode-storage", mode);

    // same as above
    if (mode === "dark") {
        darkTheme.disabled = false;
        toggle.className = "fa fa-sun";
    } else if (mode === "light") {
        darkTheme.disabled = true;
        toggle.className = "fa fa-moon";
    }
}