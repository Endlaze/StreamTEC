import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth/auth.guard'
import { SignupComponent } from '../app/components/signup/signup.component';
import { LoginComponent } from '../app/components/login/login.component';
import { PlansComponent } from '../app/components/plans/plans.component';
import { StoreComponent } from '../app/components/store/store.component';
import { MoviesComponent } from '../app/components/movies/movies.component';
import { MusicComponent } from '../app/components/music/music.component';
import { AlbumPreviewComponent } from './components/album-preview/album-preview.component';

const routes: Routes = [
  { path: '', redirectTo: '/plans', pathMatch: 'full' },
  { path: 'signup/:planId', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'plans', component: PlansComponent },
  { path: 'store', component: StoreComponent, canActivate: [AuthGuard] },
  { path: 'movies', component: MoviesComponent },
  { path: 'music', component: MusicComponent },
  { path: 'album/:idAlbum', component: AlbumPreviewComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routedComponents = [SignupComponent, LoginComponent, PlansComponent];

