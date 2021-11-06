import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputeEl = document.querySelector('input[type=text]');
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const endTime = selectedDates[0].getTime();
    const startTime = options.defaultDate.getTime();
    if (startTime > endTime) {
      alert('Please choose a date in the future');
    }
    console.log(startTime);
    console.log(endTime);
  },
};
const fp = flatpickr('#datetime-picker', options);

//console.log(fp.selectedDates);
