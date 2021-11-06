import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

let daysLeft = document.querySelector('span[data-days]');
let hoursLeft = document.querySelector('span[data-hours]');
let minutesLeft = document.querySelector('span[data-minutes]');
let secondsLeft = document.querySelector('span[data-seconds]');

const inputeEl = document.querySelector('input[type=text]');
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    let estimatedTime = null;
    const endTime = selectedDates[0].getTime();
    const startTime = options.defaultDate.getTime();
    if (startTime > endTime) {
      alert('Please choose a date in the future');
    } else {
      setInterval(() => {
        estimatedTime = convertMs(endTime - Date.now());
        time(estimatedTime);
      }, 1000);
    }

    console.log(startTime);
    console.log(endTime);

    console.log(estimatedTime);
  },
};
const fp = flatpickr('#datetime-picker', options);

//console.log(fp.selectedDates);
function time({ days, hours, minutes, seconds }) {
  daysLeft.textContent = `${days}`;
  hoursLeft.textContent = `${hours}`;
  minutesLeft.textContent = `${minutes}`;
  secondsLeft.textContent = `${seconds}`;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
