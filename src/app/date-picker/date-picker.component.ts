import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Input() min: any;
  @Output() newDateEvent = new EventEmitter<string>();

  cakeDate !: Date
  seleDate : any
  date = new FormControl(moment());
  deliveryHour = "11:00 AM"
  yesterday = new Date();

  constructor(){
    this.yesterday.setDate(this.yesterday.getDate() - 0);
  }

  dateAndHour !: String
/*  sendDateItem(value: string) {
    this.dateAndHour = value +" "+ this.deliveryHour
    console.log("date inputAndHour value ===> ", this.dateAndHour.toString())
    this.newDateEvent.emit(this.dateAndHour.toString());
  }
*/
  onChangeEvent( selectedDate : any){
    this.seleDate = selectedDate
    this.dateAndHour = this.seleDate +"-"+ this.deliveryHour
    console.log("DATE TO SEND : ", this.dateAndHour.toString())
    this.newDateEvent.emit(this.dateAndHour.toString());
  }

  onHourSelected(selectedHour: any) {
    this.deliveryHour = selectedHour
    this.dateAndHour = this.seleDate +"-"+ this.deliveryHour
    console.log("DATE TO SEND : ", this.dateAndHour.toString())
    this.newDateEvent.emit(this.dateAndHour.toString());
  }


}
