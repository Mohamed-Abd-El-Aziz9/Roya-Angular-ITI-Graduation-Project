import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
//i am eesa
//test 123
if (environment.production) {
  enableProdMode();
}
//tesst 123141243
//ahmed
//i am ahmef
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
