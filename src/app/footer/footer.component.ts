import { Component } from '@angular/core';
import { labels, urls } from '../../config';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [NgIf],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  labels = labels;
  urls = urls;
}
