import { Component } from '@angular/core';
import { labels } from '../../config';

@Component({
  selector: 'app-header-banner',
  imports: [],
  templateUrl: './header-banner.component.html',
  styleUrl: './header-banner.component.scss'
})
export class HeaderBannerComponent {
  labels = labels;
}
