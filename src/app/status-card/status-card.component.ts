import { Component, input } from '@angular/core';
import { Region } from '../../types';

@Component({
  selector: 'app-status-card',
  imports: [],
  templateUrl: './status-card.component.html',
  styleUrl: './status-card.component.scss',
})
export class StatusCardComponent {
  region = input.required<Region>();
}
