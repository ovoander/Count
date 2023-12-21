const countElement = document.getElementById("count");

let count = localStorage.getItem("count") || 0;
countElement.innerText = count;

const addCount = () => {
    count++;
    countElement.innerText = count;
    localStorage.setItem("count", count);
}

const subtractCount = () => {
    if (count > 0) {
        count--;
        countElement.innerText = count;
        localStorage.setItem("count", count);
    }
}

const resetCount = () => {
    count = 0;
    countElement.innerText = count;
    localStorage.setItem("count", count);
}
