import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';


@Component({
  standalone: true,
  selector: 'cs2-header',
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
