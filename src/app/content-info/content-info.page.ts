import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-content-info',
  templateUrl: './content-info.page.html',
  styleUrls: ['./content-info.page.scss'],
})
export class ContentInfoPage implements OnInit {
  
  countDownDat = new Date("Mar 30, 2020 09:00:00").getTime();
  constructor() { }

  ngOnInit() {

  }
  completFunction() {
    
  }
  handleEvent() {
    
  }
  countDownTimer() {
    // Set the date we're counting down to
  let x = setInterval(function() {
  let now = new Date().getTime();
  let distance = this.countDownDat - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  if (distance < 0) {
    clearInterval(x);
  }
  console.log('days', days);
  return days;
  }, 1000);
}
}
