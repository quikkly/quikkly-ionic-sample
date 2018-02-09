import { Injectable } from '@angular/core';
import { Cordova, Plugin, IonicNativePlugin } from '@ionic-native/core';

@Plugin({
    pluginName: 'QuikklyPlugin',
    plugin: 'cordova-plugin-quikkly',
    pluginRef: 'cordova.plugins.quikkly',
    platforms: ['Android','iOS']
  })
  @Injectable()
  export class QuikklyPlugin extends IonicNativePlugin {
    @Cordova()
      openScanner(apiKey: String): Promise<string[]> {return ;}
  }
  