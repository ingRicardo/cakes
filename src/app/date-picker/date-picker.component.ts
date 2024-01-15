import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
 
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import {default as _rollupMoment} from 'moment';
 
const moment = _rollupMoment || _moment;

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.css'
})
export class DatePickerComponent {

  @Output() newDateEvent = new EventEmitter<string>();

  cakeDate !: Date
  
  date = new FormControl(moment());
  deliveryHour = "11:00 AM"

  constructor(){
    
  }

  dateAndHour !: String
  sendDateItem(value: string) {
    this.dateAndHour = value +" "+ this.deliveryHour
    console.log("date inputAndHour value ===> ", this.dateAndHour.toString())
    this.newDateEvent.emit(this.dateAndHour.toString());
  }

  onChangeEvent(event : any){
   // console.log(event);
  //  console.log(event.value);
    this.dateAndHour = this.cakeDate.toString() +"-"+ this.deliveryHour
    console.log("value =====> ", this.cakeDate.toString() , " hour ===> ", this.deliveryHour)
    
  }


}
