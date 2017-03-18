import {Routes} from '@angular/router';
import {NewsComponent} from './news/news/news.component';
const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'news',
    pathMatch: 'full'
  },
  {
    path: 'news',
    component: NewsComponent
  }
];

export default appRoutes;
