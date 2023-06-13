// get input fields and result elements
const dayInput = document.querySelector('.get-info .day input');
const monthInput = document.querySelector('.get-info .month input');
const yearInput = document.querySelector('.get-info .year input');
const yearResult = document.querySelector('.result h3:nth-of-type(1) span');
const monthResult = document.querySelector('.result h3:nth-of-type(2) span');
const dayResult = document.querySelector('.result h3:nth-of-type(3) span');

// add event listener to the calculate button
let calcButton = document.querySelector('.middle-line .calc');
calcButton.addEventListener('click', function(event) {
  event.preventDefault(); // prevent the default behavior of the button
  calculateAge();
});

// add event listener to the input fields
dayInput.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) { // check if the "Enter" key is pressed
    event.preventDefault(); // prevent the default behavior of the input field
    calculateAge();
  }
});

monthInput.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) { // check if the "Enter" key is pressed
    event.preventDefault(); // prevent the default behavior of the input field
    calculateAge();
  }
});

yearInput.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) { // check if the "Enter" key is pressed
    event.preventDefault(); // prevent the default behavior of the input field
    calculateAge();
  }
});

// function to calculate age
function calculateAge() {
  // validate input fields
  let day = parseInt(dayInput.value);
  let month = parseInt(monthInput.value) - 1; // subtract 1 from month
  let year = parseInt(yearInput.value);

  if (isNaN(day) || isNaN(month) || isNaN(year)) {
    alert('Please enter a valid date in the format DD/MM/YYYY.');
    return;
  }

  // validate day and month
  let maxDays = new Date(year, month + 1, 0).getDate();
  if (day < 1 || day > maxDays) {
    alert('Please enter a valid day.');
    return;
  }
  if (month < 0 || month > 11) {
    alert('Please enter a valid month.');
    return;
  }

  // validate year
  let currentYear = new Date().getFullYear();
  if (year < 1900 || year > currentYear) {
    alert('Please enter a valid year between 1900 and ' + currentYear + '.');
    return;
  }

  // calculate age
  let today = new Date();
  let birthDate = new Date(year, month, day);
  let ageYears = today.getFullYear() - birthDate.getFullYear();
  let ageMonths = today.getMonth() - birthDate.getMonth();
  let ageDays = today.getDate() - birthDate.getDate();

  // handle negative age
  if (ageMonths < 0 || (ageMonths == 0 && ageDays < 0)) {
    ageYears--;
    ageMonths += 12;
  }
  if (ageDays < 0) {
    let lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
    ageDays += lastMonth.getDate();
    ageMonths--;
  }

  // update result elements
  yearResult.textContent = ageYears;
  monthResult.textContent = ageMonths;
  dayResult.textContent = ageDays;
}