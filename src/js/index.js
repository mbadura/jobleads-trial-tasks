import '../scss/index.scss';
import moment from 'moment';
import countdown from 'moment-countdown';

const CurrentDate = moment();
const NewDate = moment().add('5', 'm'); 

export default class TimeCounter {

  constructor(args) {
    this.initTimeContainer = document.querySelector("[data-init-time]");
    this.endTimeContainer = document.querySelector("[data-end-time]");
    this.countDownContainer = document.querySelector("[data-countdownvalue]");
    this.countStartContainer = document.querySelector("[data-start-time]");

    this.currentDate = args.currentDate;
    this.newDate = args.newDate;
    this.diff = this.newDate.diff(this.currentDate, 'seconds');
    this.counter = this.diff; 
    this.start = args.startNumber;
  }

  init() {
    this.showInitTime();
    this.checkDates();
  }

  showInitTime() {
    console.log('Current Date:' + this.currentDate.format('h:mm:ss'));
    console.log('New Date:' +  this.newDate.format('h:mm:ss'));
    console.log('Diff:' +  this.diff);
      
    this.initTimeContainer.innerHTML = this.currentDate.format('h:mm:ss');
    this.endTimeContainer.innerHTML = this.newDate.format('h:mm:ss');   
  }  

  startCountdown() {
    setInterval(() => { 
      this.counter = this.counter - 1;
      this.start--;
      this.countDownContainer.innerHTML = this.start;
    }, 1000);
  }

  checkDates() {
    this.countStartContainer.innerHTML = this.diff;
    setInterval(() => { 
      this.diff--
      this.countStartContainer.innerHTML = this.diff;
      if(this.diff === 0) {
        this.startCountdown();
      }
    }, 1000);
  }

}


document.addEventListener("DOMContentLoaded",function(){

  const counter = new TimeCounter({
    currentDate: CurrentDate,
    newDate: NewDate,
    startNumber: 100
  });

  counter.init();

});