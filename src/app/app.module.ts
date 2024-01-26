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
   
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
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
    OrderpopupComponent
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
    TranslateModule.forRoot({
      loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
      }
    }),
     MatChipsModule, MatDialogModule
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
   // InsertjsonService,
    provideClientHydration(),
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
