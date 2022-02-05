import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { CareerComponent } from './pages/career/career.component';
import { ContactMeComponent } from './pages/contact-me/contact-me.component';
import { HobbiesComponent } from './pages/hobbies/hobbies.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SandboxComponent } from './pages/sandbox/sandbox.component';
import { SplashComponent } from './pages/splash/splash.component';

const routes: Routes = [
  { path: '', component: SplashComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'career', component: CareerComponent },
  { path: 'contact-me', component: ContactMeComponent },
  { path: 'hobbies', component: HobbiesComponent },
  { path: 'sandbox', component: SandboxComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
