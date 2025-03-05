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
  {path: "myinfo", component: MyinfoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterOutlet],
  exports: [RouterModule]
})
export class AppRoutingModule { }
