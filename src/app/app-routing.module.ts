import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.HomePageModule),
  },
  {
    path: 'user-choise',
    loadChildren: () =>
      import('./user-choise/user-choise.module').then(
        (m) => m.UserChoisePageModule
      ),
  },
  {
    path: 'create-company',
    loadChildren: () =>
      import('./create-company/create-company.module').then(
        (m) => m.CreateCompanyPageModule
      ),
  },
  {
    path: 'create-driver',
    loadChildren: () =>
      import('./create-driver/create-driver.module').then(
        (m) => m.CreateDriverPageModule
      ),
  },
  {
    path: 'form-professional',
    loadChildren: () =>
      import('./create-driver/form-professional/form-professional.module').then(
        (m) => m.FormProfessionalPageModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'tour-form',
    loadChildren: () =>
      import('./tour-form/tour-form.module').then((m) => m.TourFormPageModule),
  },
  {
    path: 'statistics',
    loadChildren: () =>
      import('./statistics/statistics.module').then(
        (m) => m.StatisticsPageModule
      ),
  },
  {
    path: 'account-driver',
    loadChildren: () =>
      import('./account-driver/account-driver.module').then(
        (m) => m.AccountDriverPageModule
      ),
  },
  {
    path: 'options',
    loadChildren: () =>
      import('./options/options.module').then((m) => m.OptionsPageModule),
  },
  {
    path: 'confirm-account',
    loadChildren: () =>
      import('./confirm-account/confirm-account.module').then(
        (m) => m.ConfirmAccountPageModule
      ),
  },
  {
    path: 'create-company-form',
    loadChildren: () =>
      import(
        '../app/create-company/create-company-form/create-company-form.module'
      ).then((m) => m.CreateCompanyFormPageModule),
  },
  {
    path: 'tour-management',
    loadChildren: () => import('./tour-management/tour-management.module').then( m => m.TourManagementPageModule)
  },
  {
    path: 'create-vehicle',
    loadChildren: () => import('./create-vehicle/create-vehicle.module').then( m => m.CreateVehiclePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
