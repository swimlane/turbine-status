import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { StatusCardComponent } from '../status-card/status-card.component';
import { HeaderBannerComponent } from '../header-banner/header-banner.component';
import { regions } from '../../config';

@Component({
  selector: 'app-home',
  imports: [
    FooterComponent,
    HeaderComponent,
    HeaderBannerComponent,
    StatusCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  regions = regions;
}
