const countElement = document.getElementById("count");

let count = localStorage.getItem("count") || 0;
countElement.textContent = count;

const addCount = () => {
    count++;
    countElement.textContent = count;
    localStorage.setItem("count", count);
};

const subtractCount = () => {
    if (count > 0) {
        count--;
    }
    countElement.textContent = count;
    localStorage.setItem("count", count);
};
const resetCount = () => {
    count = 0;
    countElement.textContent = count;
    localStorage.setItem("count", count);
};
