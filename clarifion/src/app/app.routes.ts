import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { ClarifionBodyComponent } from './layouts/clarifion-body/clarifion-body.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: ClarifionBodyComponent
      }
    ]
  }
];
