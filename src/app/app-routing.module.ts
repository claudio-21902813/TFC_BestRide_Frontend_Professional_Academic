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
  },  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'tour-form',
    loadChildren: () => import('./tour-form/tour-form.module').then( m => m.TourFormPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
