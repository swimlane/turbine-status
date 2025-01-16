import { Component } from '@angular/core';
import { labels, urls } from '../../config';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  labels = labels;
  urls = urls;
}
