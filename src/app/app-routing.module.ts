import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestapisComponent } from './restapis/restapis.component';
import { MaincakesComponent } from './maincakes/maincakes.component';
import { ClassicComponent } from './classic/classic.component';
import { CakeStepperComponent } from './cake-stepper/cake-stepper.component';
import { CommentsectionComponent } from './commentsection/commentsection.component';
import { MostWantedComponent } from './most-wanted/most-wanted.component';
import { AppComponent } from './app.component';
const routes: Routes = [
 // { path: '', component: AppComponent },
  { path: 'restapis', component: RestapisComponent },
  { path: 'classic', component: ClassicComponent},
  { path: 'create', component: CakeStepperComponent},
  { path: 'comment', component: CommentsectionComponent},
  { path: 'mostwanted', component: MostWantedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
