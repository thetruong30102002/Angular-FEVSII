import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';  // Đảm bảo AppModule được import

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
