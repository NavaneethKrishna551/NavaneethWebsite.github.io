let count = 0;

function AddCount() {
    count++;
    document.getElementById('count').textContent = count;
}

function decreaseCount() {
    count--;
    document.getElementById('count').textContent = count;
}