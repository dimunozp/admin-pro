import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {pages_routes} from "./pages/pages.routing";
import {auth_routes} from "./auth/auth.routing";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(pages_routes),
    provideRouter(auth_routes),
    provideRouter(routes)
  ],
};
