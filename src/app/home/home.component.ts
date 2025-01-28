import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Region, StatusResponse } from '../../types';
import {
  regions,
  regionStatusApiPath,
  statusPollingIntervalInMs,
} from '../../config';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { StatusCardComponent } from '../status-card/status-card.component';
import { HeaderBannerComponent } from '../header-banner/header-banner.component';
import { Subscription, forkJoin, interval, of } from 'rxjs';
import { startWith, switchMap, catchError } from 'rxjs/operators';

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
export class HomeComponent implements OnInit, OnDestroy {
  regions: Region[] = regions;
  private pollingSubscription?: Subscription;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.startPolling();
  }

  ngOnDestroy() {
    if (this.pollingSubscription) {
      this.pollingSubscription.unsubscribe();
    }
  }

  private startPolling() {
    this.pollingSubscription = interval(statusPollingIntervalInMs)
      .pipe(
        startWith(0),
        switchMap(() => {
          return this.fetchStatuses();
        })
      )
      .subscribe();
  }

  private fetchStatuses() {
    const requests = this.regions.map((region) =>
      this.http.get<StatusResponse>(`${region.url}${regionStatusApiPath}`).pipe(
        catchError(() => {
          return of(null);
        })
      )
    );

    return forkJoin(requests).pipe(
      switchMap((responses) => {
        responses.forEach((response, index) => {
          if (response) {
            this.regions[index].status = response.status;
          } else {
            this.regions[index].status = {
              description: 'Unknown',
              indicator: 'unknown',
            };
          }
        });
        return of([]);
      }),
      catchError(() => {
        this.regions.forEach((region) => {
          region.status = {
            description: 'Unknown',
            indicator: 'unknown',
          };
        });
        return of([]);
      })
    );
  }
}
