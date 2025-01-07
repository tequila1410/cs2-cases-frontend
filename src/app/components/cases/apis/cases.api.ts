import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CaseModel} from '@components/cases/models/case.model';

@Injectable()
export class CasesApi {
  private httpClient = inject(HttpClient);

  constructor() {
  }

  getAllCases() {
    return this.httpClient.get<CaseModel[]>('api_url/cases/getAll');
  }

  getCaseById(caseId: string) {
    const params = {
      caseId
    }

    return this.httpClient.get<CaseModel>('api_url/case/getById', {params})
  }
}
