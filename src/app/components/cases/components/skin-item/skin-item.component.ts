import {Component, Input} from '@angular/core';
import {SkinModel} from '@components/cases/models/skin.model';
import {NgIf, NgStyle} from '@angular/common';
import {SkinRarity} from '../../../../shared/utils/skin-rarity';

@Component({
  standalone: true,
  selector: 'cs2-skin-item',
  imports: [
    NgIf,
    NgStyle
  ],
  templateUrl: './skin-item.component.html',
  styleUrl: './skin-item.component.scss'
})
export class SkinItemComponent {
  @Input() skin: SkinModel;
  @Input() dropValue: number;
  protected readonly SkinRarity = SkinRarity;
}
