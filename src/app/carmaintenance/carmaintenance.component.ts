import { Component, model} from '@angular/core';
 
 
interface Maintenance {
  value: string;
  viewValue: string;
}


interface Time {
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


  times: Time[] = [
    {value: '00:00', viewValue: '00:00'},
    {value: '01:00', viewValue: '01:00'},
    {value: '02:00', viewValue: '02:00'},
    {value: '03:00', viewValue: '03:00'},
    {value: '04:00', viewValue: '04:00'},
    {value: '05:00', viewValue: '05:00'},
    {value: '06:00', viewValue: '06:00'},
    {value: '07:00', viewValue: '07:00'},
    {value: '08:00', viewValue: '08:00'},
    {value: '09:00', viewValue: '09:00'},
    {value: '10:00', viewValue: '10:00'},
    {value: '11:00', viewValue: '11:00'},
    {value: '12:00', viewValue: '12:00'},
    {value: '13:00', viewValue: '13:00'},
    {value: '14:00', viewValue: '14:00'},
    {value: '15:00', viewValue: '15:00'},
    {value: '16:00', viewValue: '16:00'},
    {value: '17:00', viewValue: '17:00'},
    {value: '18:00', viewValue: '18:00'},
    {value: '19:00', viewValue: '19:00'},

  ];

  timeselected!: string;
   
  timevalue !: string;
  selectedmaintype!: string;
  clientname !:  string;
  clientvehicle !: string;
  appointment : any;
  d !: string;

  selected!: Date | null;
  $event: any;
  constructor( ){}


  updateDOB(dateObject: any) {
    alert(dateObject.value);
    const stringified = JSON.stringify(dateObject.value);
    this.appointment = stringified.substring(1, 11);

   }
  

  getAppoinment(){
    this.appointment = this.selected;
 
    this.d = new Date(this.appointment).toISOString();
    this.d = this.d.substring(0,10);
    
    if (this.selectedmaintype && this.clientname && this.clientvehicle && this.d && this.timeselected)
      alert(this.selectedmaintype + " " + this.clientname + " " + this.clientvehicle + " "+ this.d + " "+ this.timeselected );
    else 
      alert('Fill the fields out please')
  }

}
