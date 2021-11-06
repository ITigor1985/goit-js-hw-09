import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputeEl = document.querySelector("input[type=text]");
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },
  };
flatpickr("#datetime-picker", options);
console.log(inputeEl)