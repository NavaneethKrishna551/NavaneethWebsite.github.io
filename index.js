// Get the counter element
const counterElement = document.getElementById('counter');

// Retrieve the visit count from localStorage
let visitCount = localStorage.getItem('page_view');

// Check if visitCount is null (first visit)
if (visitCount === null) {
    visitCount = 1;
} else {
    visitCount = Number(visitCount) + 1;
}

// Update the visit count in localStorage
localStorage.setItem('page_view', visitCount);

// Display the visit count
counterElement.textContent = visitCount;
