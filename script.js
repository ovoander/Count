const countElement = document.getElementById("count");

let count = localStorage.getItem("count") || 0;
countElement.innerText = count;

function addCount() {
    count++;
    countElement.innerText = count;
    localStorage.setItem("count", count);
}

function subtractCount() {
    if (count > 0) {
        count--;
        countElement.innerText = count;
        localStorage.setItem("count", count);
    }
}

function resetCount() {
    count = 0;
    countElement.innerText = count;
    localStorage.setItem("count", count);
}
