import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashbordComponent} from './dashbord/dashbord.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroesComponent} from './heroes/heroes.component';

const routes: Routes = [
  {path: 'dashboard', component: DashbordComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'heroes', component: HeroesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
