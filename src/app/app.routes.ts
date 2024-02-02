import { Routes } from '@angular/router';
import { ListComponent } from './product/list.component';
import { DetailsComponent } from './product/details.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'list', component: ListComponent },
  { path: 'item/:productId', component: DetailsComponent },
];
