import {Routes} from '@angular/router';
import {CasesComponent} from '@components/cases/cases.component';
import {CaseViewComponent} from '@components/cases/pages/case-view/case-view.component';

export const CASES_ROUTER: Routes = [{
  path: '',
  component: CasesComponent
}, {
  path: ':id',
  component: CaseViewComponent
}]
