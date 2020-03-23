import { Component, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController) {}
  swipeEvent(e) {
  console.log('event', e);
    if (e.direction == 2) {
      // this.navCtrl.push('Item2');
      this.navCtrl.navigateForward('content-info');
      alert('hi');
  }
  }
}
