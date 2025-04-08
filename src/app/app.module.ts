import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CakeStepperComponent } from './cake-stepper/cake-stepper.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import { MenuoverComponent } from './menuover/menuover.component';
import { CreatecakeComponent } from './createcake/createcake.component';
import { ClassicComponent } from './classic/classic.component';

import {MatTabsModule} from '@angular/material/tabs';
import { ClassicTypeCakesComponent } from './classic-type-cakes/classic-type-cakes.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ImgCarrouselComponent } from './img-carrousel/img-carrousel.component';
import {MatSelectModule} from '@angular/material/select';
import { DatePickerComponent } from './date-picker/date-picker.component';
import {MatDatepickerModule} from '@angular/material/datepicker';  
import {MatNativeDateModule} from '@angular/material/core';
   
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import { RestapisComponent } from './restapis/restapis.component';
import { MaincakesComponent } from './maincakes/maincakes.component';
import { CommentsectionComponent } from './commentsection/commentsection.component';
import { MostWantedComponent } from './most-wanted/most-wanted.component';
import { ContactComponent } from './contact/contact.component';
import { HorizontalmenuComponent } from './horizontalmenu/horizontalmenu.component';
 
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ChangelangComponent } from './changelang/changelang.component';
import { ImgCarrouselHalloweenComponent } from './img-carrousel-halloween/img-carrousel-halloween.component';
import { ImgCarrouselChristmasComponent } from './img-carrousel-christmas/img-carrousel-christmas.component';
import { ImgCarrouselWeddingsComponent } from './img-carrousel-weddings/img-carrousel-weddings.component';


//import {Component, inject} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { OrderpopupComponent } from './orderpopup/orderpopup.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ListofordersComponent } from './listoforders/listoforders.component';
import { SnnlifComponent } from './snnlif/snnlif.component';

import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MyinfoComponent } from './myinfo/myinfo.component';
import { DrawerComponent } from './drawer/drawer.component';
import { WorkexpComponent } from './workexp/workexp.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { SpecareasComponent } from './specareas/specareas.component';
import { EducationComponent } from './education/education.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { NewvehicleComponent } from './newvehicle/newvehicle.component';
import {MatDividerModule} from '@angular/material/divider';
import { CovervehicleComponent } from './covervehicle/covervehicle.component';
import { VehiclelistComponent } from './vehiclelist/vehiclelist.component';
import { MatTableModule } from '@angular/material/table'; // Or CdkTableModule
import { MatPaginatorModule} from '@angular/material/paginator';
import { CarmaintenanceComponent } from './carmaintenance/carmaintenance.component';

//import {MatTimepickerModule} from '@angular/material/timepicker';


import {NativeDateAdapter} from '@angular/material/core';
import { MaintlistComponent } from './maintlist/maintlist.component';
import { Aiproject1Component } from './aiproject1/aiproject1.component';
import { LineargraphComponent } from './component/lineargraph/lineargraph.component';
import { Cakesv1Component } from './cakesv1/cakesv1.component';
import { Cakesv1horimenuComponent } from './cakesv1horimenu/cakesv1horimenu.component';



//import { InsertjsonService } from './insertjson.service'
// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.

 


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

// See the Moment.js docs for the meaning of these formats:
// https://momentjs.com/docs/#/displaying/format/
export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
 
@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CakeStepperComponent,
    SidenavComponent,
    MenuoverComponent,
    CreatecakeComponent,
    ClassicComponent,
    ClassicTypeCakesComponent,
    ImgCarrouselComponent,
    DatePickerComponent,
    RestapisComponent,
    MaincakesComponent,
    CommentsectionComponent,
    MostWantedComponent,
    ContactComponent,
    HorizontalmenuComponent,
    ChangelangComponent,
    ImgCarrouselHalloweenComponent,
    ImgCarrouselChristmasComponent,
    ImgCarrouselWeddingsComponent,
    OrderpopupComponent,
    ListofordersComponent,
    SnnlifComponent,
    MyinfoComponent,
    DrawerComponent,
    WorkexpComponent,
    SpecareasComponent,
    EducationComponent,
    VehicleComponent,
    NewvehicleComponent,
    CovervehicleComponent,
    VehiclelistComponent,
    CarmaintenanceComponent,
    MaintlistComponent,
    Aiproject1Component,
    LineargraphComponent,
    Cakesv1Component,
    Cakesv1horimenuComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSidenavModule,
    MatMenuModule,
    MatTabsModule,
    MatCardModule,
    CarouselModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule,
    MatButtonToggleModule,
    TranslateModule.forRoot({
      loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
      }
    }),
     MatChipsModule, MatDialogModule, MatProgressSpinnerModule, MatExpansionModule,
     MatDividerModule,MatTableModule,MatPaginatorModule
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
   // InsertjsonService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
