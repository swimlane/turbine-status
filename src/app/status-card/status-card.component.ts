import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';
import { Region, Status } from '../../types';

@Component({
  selector: 'app-status-card',
  imports: [NgClass],
  templateUrl: './status-card.component.html',
  styleUrl: './status-card.component.scss',
})
export class StatusCardComponent {
  region = input.required<Region>();
  status = input.required<Status | undefined>();

  getIndicatorClass() {
    const indicator = this.status()?.indicator || 'unknown';
    return `indicator indicator-${indicator}`;
  }
}
