import { Component } from '@angular/core';
import { NavController,
         AlertController } from 'ionic-angular';
import { Device } from '@ionic-native/device';

import { QuikklyPlugin } from '@ionic-native/quikkly-plugin';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tags: string[] = [];

  constructor(public navCtrl: NavController, private quikkly: QuikklyPlugin, private alert: AlertController) {
  }

  goQuikkly() {
    this.quikkly.openScanner("YOUR API KEY GOES HERE").then((value) => {
      console.log(`openScanner returned: ${value}`);
      value.forEach((iter) => this.tags.push(iter));
    }).catch((err) => {
      console.log(`openScanner failed: ${err}`);
      this.showAlert("Oooops!", err);
    });
  }

  private showAlert(title: string, subTitle: string) {
    let alert = this.alert.create({
      title: title,
      subTitle: subTitle,
      buttons: ['Ok']
    });

    alert.present();
  }
}
