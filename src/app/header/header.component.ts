import { Component } from '@angular/core';
import { labels, urls } from '../../config';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  labels = labels;
  urls = urls;
}
