import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Device } from '@ionic-native/device';

import { QuikklyPlugin } from '@ionic-native/quikkly-plugin';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tags: string[] = [];
  constructor(public navCtrl: NavController, private quikkly: QuikklyPlugin) {
  }

  goQuikkly() {
    this.quikkly.openScanner("kCPeTZnGsmo90ZAu9q2rlXB94EAbUC2fvK7Ur95tLHsKFIYhYdt8Qrl80iVy").then((value) => {
      console.log("success handler");
      value.forEach((iter) => this.tags.push(iter));
    }).catch((err) => {
      console.log("error handler");
      console.log(err);
    });
  }
}
