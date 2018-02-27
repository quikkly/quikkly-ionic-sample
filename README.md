A simple ionic tabbed application to demonstrate how to use the cordova-plugin-quikkly and @quikkly/ionic components

### Installation ###

To see these components in action clone this repo and run
```npm install```

We assume you already rigged for Ionic development, so for the best experience you should connect your phone to your development workstation and run

```ionic cordova run android```

or

```ionic cordova run ios```

### Next Steps... ###
To use the plugin in your own app you need to install it inside your Ionic project, to do so run

```ionic cordova plugins add cordova-plugin-quikkly```

If you want to include our Ionic wrapper
```npm install @quikkly/ionic --save```

The remainder of this section assumes you using both components.

First you need to load the module by specifing it in your */src/app/app.module.ts* file.


```typescript
import { QuikklyPlugin } from '@quikkly/ionic'  :point-left:

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    QuikklyPlugin,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
```
We've added a button to our home view to launch the Quikkly scanner. So we need to update our view controller */src/pages/home/home.ts*
```typescript
import { Component } from '@angular/core';
import { NavController,
         AlertController } from 'ionic-angular';

import { QuikklyPlugin } from '@quikkly/ionic';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tags: string[] = [];

  constructor(public navCtrl: NavController, private quikkly: QuikklyPlugin, private alert: AlertController) {
  }

  goQuikkly() {
    this.quikkly.openScanner().then((value) => {
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
```

And finally our view which is */src/pages/home/home.html*.
```html
<ion-header>
  <ion-navbar>
    <ion-title>Home</ion-title>
  </ion-navbar>
</ion-header>

<ion-content padding>
  <h2>Welcome to Quikkly Test!</h2>
  <p>
    This is a basic Ionic app to test the integration of the 
    quikkly SDK. Press the SCAN button to open the Quikkly 
    scanner. Simply scan a code and the resolved values
    will be displayed.
  </p>
  <h3>TAGS</h3>
  <ul>
      <li *ngIf="!tags.length">Scan some tags !</li>
      <li *ngFor="let tag of tags">
        {{ tag }}
      </li>
  </ul>
  <p>
    <button ion-button icon-start (click)="goQuikkly()">
      <ion-icon name="star"></ion-icon>SCAN</button>
  </p>
</ion-content>
```

### Test it out ###

If you run the sample open the scanner and scan this image the value returned is **123456**.

<img src="123456.svg"  width="190">