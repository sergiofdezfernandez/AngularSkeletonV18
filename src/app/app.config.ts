import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { httpErrorInterceptor } from './core/interceptors/http-error.interceptor';
import {
  provideAnimations,
  provideNoopAnimations,
} from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch(), withInterceptors([httpErrorInterceptor])),
    provideAnimations(),
    provideNoopAnimations(),
  ],
};
