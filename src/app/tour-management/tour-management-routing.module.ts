import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TourManagementPage } from './tour-management.page';

const routes: Routes = [
  {
    path: '',
    component: TourManagementPage,
  },
  {
    path: 'create-tour',
    loadChildren: () =>
      import('./create-tour/create-tour.module').then(
        (m) => m.CreateTourPageModule
      ),
  },
  {
    path: 'create-tour',
    loadChildren: () =>
      import('./create-tour/create-tour.module').then(
        (m) => m.CreateTourPageModule
      ),
  },
  {
    path: 'create-tour-point',
    loadChildren: () =>
      import('./create-tour-point/create-tour-point.module').then(
        (m) => m.CreateTourPointPageModule
      ),
  },
  {
    path: 'finish-tour',
    loadChildren: () => import('./finish-tour/finish-tour.module').then( m => m.FinishTourPageModule)
  },
  {
    path: 'view-tour-poi',
    loadChildren: () => import('./view-tour-poi/view-tour-poi.module').then( m => m.ViewTourPoiPageModule)
  },
  {
    path: 'edit-tour',
    loadChildren: () => import('./edit-tour/edit-tour.module').then( m => m.EditTourPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TourManagementPageRoutingModule {}
