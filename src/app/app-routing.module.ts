import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  { path: 'regist', loadChildren: './pages/regist/regist.module#RegistPageModule' },
  { path: 'welcome', loadChildren: './pages/welcome/welcome.module#WelcomePageModule' },  { path: 'create-pet', loadChildren: './pages/create-pet/create-pet.module#CreatePetPageModule' },
  { path: 'my-pets', loadChildren: './pages/my-pets/my-pets.module#MyPetsPageModule' },
  { path: 'logout', loadChildren: './pages/logout/logout.module#LogoutPageModule' },
  { path: 'edit-pet', loadChildren: './pages/edit-pet/edit-pet.module#EditPetPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },




  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
