import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Device } from '@ionic-native/device';

import { Quikkly } from '../../app/quikkly';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tags: string[] = [];
  constructor(public navCtrl: NavController, private quikkly: Quikkly) {
  }

  goQuikkly() {
    this.quikkly.openScanner().then((value) => {
      console.log("success handler");
      value.forEach((iter) => this.tags.push(iter));
    }).catch((err) => {
      console.log("error handler");
      console.log(err);
    });
  }
}
