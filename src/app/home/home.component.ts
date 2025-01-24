import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { StatusCardComponent } from '../status-card/status-card.component';
import { HeaderBannerComponent } from '../header-banner/header-banner.component';
import { regions, regionStatusApiPath } from '../../config';
import { Region, StatusResponse } from '../../types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    HeaderBannerComponent,
    StatusCardComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  regions: Region[] = regions;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchRegionStatuses();
  }

  fetchRegionStatuses() {
    const statusRequests = this.regions.map((region) =>
      this.http.get<StatusResponse>(`${region.url}${regionStatusApiPath}`)
    );

    forkJoin(statusRequests).subscribe({
      next: (responses) => {
        responses.forEach((response, index) => {
          this.regions[index].status = response.status;
        });
      },
      error: () => {
        this.regions.forEach((region) => {
          region.status = {
            description: 'Unknown',
            indicator: 'unknown',
          };
        });
      },
    });
  }
}
