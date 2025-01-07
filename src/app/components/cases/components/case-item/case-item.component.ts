import {Component, Input} from '@angular/core';
import {CaseModel} from '@components/cases/models/case.model';

@Component({
  selector: 'cs2-case-item',
  standalone: true,
  imports: [],
  templateUrl: './case-item.component.html',
  styleUrl: './case-item.component.scss'
})
export class CaseItemComponent {

  @Input() case: CaseModel;

}
