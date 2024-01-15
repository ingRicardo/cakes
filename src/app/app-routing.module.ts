import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestapisComponent } from './restapis/restapis.component';
import { MaincakesComponent } from './maincakes/maincakes.component';
const routes: Routes = [
  { path: '', component: MaincakesComponent },
  { path: 'restapis', component: RestapisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
