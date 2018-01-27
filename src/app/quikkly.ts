import { Injectable } from '@angular/core';
import { Cordova, Plugin, IonicNativePlugin } from '@ionic-native/core';

@Plugin({
    pluginName: 'Quikkly',
    plugin: 'cordova-plugin-quikkly',
    pluginRef: 'cordova.plugins.quikkly',
    platforms: ['Android']
  })
  @Injectable()
  export class Quikkly extends IonicNativePlugin {
    @Cordova()
      openScanner(): Promise<string[]> {return ;}
  }
  