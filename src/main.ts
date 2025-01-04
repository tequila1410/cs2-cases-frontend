import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from '@cs2/app.config';
import { AppComponent } from '@cs2/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
