import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  { path: '', redirectTo: 'pelis', pathMatch: 'full' },
  { path: 'home', 
  loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), canActivate: [AuthGuard]},
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'description',
    loadChildren: () => import('./description/description.module').then( m => m.DescriptionPageModule),canActivate: [AuthGuard]
  },
  {
    path: 'pelis',
    loadChildren: () => import('./pages/pelis/pelis.module').then( m => m.PelisPageModule),canActivate: [AuthGuard]
  },
  {
    path: 'peli/:id',
    loadChildren: () => import('./pages/peli-details/peli-details.module').then( m => m.PeliDetailsPageModule),canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
