import {ChangeDetectionStrategy, Component, model} from '@angular/core';
//import { NgxMatCalendar } from '@angular-material-components/datetime-picker';
import {NgModule} from '@angular/core';
 
interface Maintenance {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-carmaintenance',
  templateUrl: './carmaintenance.component.html',
  styleUrl: './carmaintenance.component.css'
})

export class CarmaintenanceComponent {
  maints: Maintenance[] = [
    {value: 'type-0', viewValue: 'type-0'},
    {value: 'type-1', viewValue: 'type-1'},
    {value: 'type-2', viewValue: 'Tacos'},
  ];

   
  timevalue !: string;
  selectedmaintype!: string;
  clientname !:  string;
  clientvehicle !: string;
  appointment : any;
 

  selected = model<Date | null>(null);


  constructor( ){}


  updateDOB(dateObject: any) {
    
    const stringified = JSON.stringify(dateObject.value);
    this.appointment = stringified.substring(1, 11);

   }
  

  getAppoinment(){
 
    if (this.selectedmaintype && this.clientname && this.clientvehicle && this.appointment && this.timevalue)
      alert(this.selectedmaintype + " " + this.clientname + " " + this.clientvehicle + " "+ this.appointment + " "+ this.timevalue );
    else 
      alert('Fill the fields out please')
  }

}
