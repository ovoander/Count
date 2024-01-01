const countElement = document.getElementById("count");

let count = localStorage.getItem("count") || 0;
countElement.innerText = count;

const addCount = () => {
    count++;
    localStorage.setItem("count", count);
    countElement.innerText = count;
};

const subtractCount = () => {
    if (count > 0) {
        count--;
        localStorage.setItem("count", count);
        countElement.innerText = count;
    }
};

const resetCount = () => {
    count = 0;
    localStorage.setItem("count", count);
    countElement.innerText = count;
};
