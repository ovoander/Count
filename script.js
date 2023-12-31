const toggleTheme = () => {
    if (localStorage.theme === "dark") {
        localStorage.theme = "light";
    } else {
        localStorage.theme = "dark";
    }
    document.documentElement.classList.toggle("dark");
};

const setThemeOnLoad = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
        document.documentElement.classList.remove("dark");
    }
};

setThemeOnLoad();
