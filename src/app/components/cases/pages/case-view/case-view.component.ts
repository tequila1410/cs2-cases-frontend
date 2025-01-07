import {Component, inject, Input, OnInit} from '@angular/core';
import {CaseItemComponent} from '@components/cases/components/case-item/case-item.component';
import {CaseModel} from '@components/cases/models/case.model';
import {CasesFacade} from '@components/cases/cases.facade';
import {ActivatedRoute, Router} from '@angular/router';
import {SkinItemComponent} from '@components/cases/components/skin-item/skin-item.component';
import {NgForOf} from '@angular/common';
import {CasesApi} from '@components/cases/apis/cases.api';

@Component({
  standalone: true,
  selector: 'cs2-case-view',
  imports: [
    CaseItemComponent,
    SkinItemComponent,
    NgForOf
  ],
  providers: [CasesApi, CasesFacade],
  templateUrl: './case-view.component.html',
  styleUrl: './case-view.component.scss'
})
export class CaseViewComponent implements OnInit {
  private facade = inject(CasesFacade);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  caseItem: CaseModel;

  constructor() {
    this.caseItem = history.state.data;
  }

  ngOnInit() {
    if (!this.caseItem) {
      this.route.queryParams.subscribe(params => {
        const caseId = params['id'];
        if (caseId)
          this.loadCaseData(caseId)
        else
          this.router.navigate(['/case'])
      });
    }
  }

  private loadCaseData(caseId: string) {
    this.facade.getCaseById(caseId)
      .subscribe(caseItem => this.caseItem = caseItem)
  }

}
