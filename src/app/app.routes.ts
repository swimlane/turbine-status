import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'header', component: HeaderComponent, pathMatch: 'full' },
  { path: 'footer', component: FooterComponent, pathMatch: 'full' },
];
