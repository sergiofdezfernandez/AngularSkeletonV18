import { Routes } from '@angular/router';
import { MainCoreComponent } from './core/container/main-core/main-core.component';

export const routes: Routes = [
  {
    path: 'main',
    component: MainCoreComponent,
    canActivate: [],
    children: [],
  },
];
