import { Routes } from '@angular/router';
import { NopagefoundComponent } from "./pages/nopagefound/nopagefound.component";

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent },
];
