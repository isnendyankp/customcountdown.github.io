const inputContainer = document.getElementById('input-container');
const countdownForm = document.getElementById('countdownForm');
const dateEl = document.getElementById('date-picker');

let countdownTitle = '';
let countdownDate = '';
let countdownValue = Date;

// Set Date Input Min & Value with Today's Date
const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);

// Take values from Form Input
function updateCountdown(e) {
    e.preventDefault();
    countdownTitle = e.srcElement[0].value;
    countdownDate = e.srcElement[1].value;
    console.log(countdownTitle, countdownDate);
    // Get number version of current Date, updateDOM
    countdownValue = new Date(countdownDate).getTime();
    console.log('countdown value:', countdownValue);
}

// Event Listener
countdownForm.addEventListener('submit', updateCountdown);