import { Routes } from '@angular/router';
import {CasesComponent} from '@components/cases/cases.component';

export const routes: Routes = [{
  path: 'case',
  loadChildren: () => import('./components/cases/cases.router').then(c => c.CASES_ROUTER)
}, {
  path: '',
  redirectTo: '/case',
  pathMatch: 'full'
}];
