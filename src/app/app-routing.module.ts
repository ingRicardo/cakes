import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';
import { RestapisComponent } from './restapis/restapis.component';
import { MaincakesComponent } from './maincakes/maincakes.component';
import { ClassicComponent } from './classic/classic.component';
import { CakeStepperComponent } from './cake-stepper/cake-stepper.component';
import { CommentsectionComponent } from './commentsection/commentsection.component';
import { MostWantedComponent } from './most-wanted/most-wanted.component';
import { ChangelangComponent } from './changelang/changelang.component';
import { ListofordersComponent } from './listoforders/listoforders.component';
import { SnnlifComponent } from './snnlif/snnlif.component';
import { MyinfoComponent } from './myinfo/myinfo.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { Aiproject1Component } from './aiproject1/aiproject1.component';
import { Cakesv1Component } from './cakesv1/cakesv1.component';
import { VideogamesComponent } from './videogames/videogames.component';
const routes: Routes = [
  { path: '', component: MaincakesComponent },
  { path: 'restapis', component: RestapisComponent },
  { path: 'classic', component: ClassicComponent},
  { path: 'create', component: CakeStepperComponent},
  { path: 'comment', component: CommentsectionComponent},
  { path: 'mostwanted', component: MostWantedComponent},
  {path: 'changelan', component:ChangelangComponent},
  {path: "listoforders", component: ListofordersComponent},
  {path: "dataset", component: SnnlifComponent},
  {path: "myinfo", component: MyinfoComponent},
  {path: "vehicle", component: VehicleComponent},
  {path: "aiproject1", component: Aiproject1Component},
  {path: "cakesv1", component: Cakesv1Component},
  {path: "videogames", component: VideogamesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterOutlet],
  exports: [RouterModule]
})
export class AppRoutingModule { }
