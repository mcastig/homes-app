import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { DetailsComponent } from './app/details/details.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'details/:id', component: DetailsComponent }
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
});
