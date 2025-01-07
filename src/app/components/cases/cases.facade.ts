import {inject, Injectable} from '@angular/core';
import {CasesApi} from '@components/cases/apis/cases.api';
import {map} from 'rxjs';

@Injectable()
export class CasesFacade {
  private api = inject(CasesApi);

  constructor() {
  }

  getAllCases() {
    return this.api.getAllCases()
      .pipe(
        map(res => {
          return res;
        })
      )
  }

  getCaseById(caseId: string) {
    return this.api.getCaseById(caseId)
  }
}
