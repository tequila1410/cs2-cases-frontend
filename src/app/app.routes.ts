import { Routes } from '@angular/router';
import {CasesComponent} from '@components/cases/cases.component';

export const routes: Routes = [{
  path: 'cases',
  loadComponent: () => import('./components/cases/cases.component').then(c => c.CasesComponent)
}, {
  path: '',
  redirectTo: '/cases',
  pathMatch: 'full'
}];
