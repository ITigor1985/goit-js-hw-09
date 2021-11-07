import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

let daysLeft = document.querySelector('span[data-days]');
let hoursLeft = document.querySelector('span[data-hours]');
let minutesLeft = document.querySelector('span[data-minutes]');
let secondsLeft = document.querySelector('span[data-seconds]');

const inputeEl = document.querySelector('input[type=text]');
const btnStart = document.querySelector("button[data-start]");
btnStart.setAttribute("disabled", true);
let timerId=null
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
      btnStart.removeAttribute("disabled");
      
      btnStart.addEventListener('click', () => {
        if(timerId){
          return;
        }
        timerId = setInterval(() => {
        estimatedTime = convertMs(endTime - Date.now());
        timeLeft(estimatedTime);
        if(estimatedTime.seconds == 0){
          btnStart.setAttribute("disabled", true);
          clearInterval(timerId);
          return
        }
      }, 1000);})
      
    }    
  },
};
const fp = flatpickr('#datetime-picker', options);


function timeLeft({ days, hours, minutes, seconds }) {
  daysLeft.textContent = `${days}`;
  hoursLeft.textContent = `${hours}`;
  minutesLeft.textContent = `${minutes}`;
  secondsLeft.textContent = `${seconds}`;
}

function pad ( value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
