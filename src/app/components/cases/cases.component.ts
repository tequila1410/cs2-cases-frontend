import {Component, inject, OnInit} from '@angular/core';
import {CasesApi} from '@components/cases/apis/cases.api';
import {CasesFacade} from '@components/cases/cases.facade';
import {CaseModel} from '@components/cases/models/case.model';
import {CommonModule} from '@angular/common';
import {CaseItemComponent} from '@components/cases/components/case-item/case-item.component';
import {HttpClient} from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'cs2-cases',
  imports: [
    // NgForOf,
    CommonModule,
    CaseItemComponent
  ],
  providers: [CasesApi, CasesFacade],
  templateUrl: './cases.component.html',
  styleUrl: './cases.component.scss'
})
export class CasesComponent implements OnInit {
  private facade = inject(CasesFacade);

  cases: CaseModel[] = [];

  constructor() {
  }

  ngOnInit() {
    this.facade.getAllCases()
      .subscribe(res => {
        this.cases = res;
      })
  }
}
