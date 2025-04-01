import { Component, model} from '@angular/core';
import { InsertjsonService } from '../insertjson.service';
import { VehicleAp } from '../vehicle-ap';
 
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
    {value: 'type0', viewValue: 'type-0'},
    {value: 'type1', viewValue: 'type-1'},
    {value: 'type2', viewValue: 'Tacos'},
  ];


  times: Time[] = [
    {value: '0000', viewValue: '00-00'},
    {value: '0100', viewValue: '01:00'},
    {value: '0200', viewValue: '02:00'},
    {value: '0300', viewValue: '03:00'},
    {value: '0400', viewValue: '04:00'},
    {value: '0500', viewValue: '05:00'},
    {value: '0600', viewValue: '06:00'},
    {value: '0700', viewValue: '07:00'},
    {value: '0800', viewValue: '08:00'},
    {value: '0900', viewValue: '09:00'},
    {value: '1000', viewValue: '10:00'},
    {value: '1100', viewValue: '11:00'},
    {value: '1200', viewValue: '12:00'},
    {value: '1300', viewValue: '13:00'},
    {value: '1400', viewValue: '14:00'},
    {value: '1500', viewValue: '15:00'},
    {value: '1600', viewValue: '16:00'},
    {value: '1700', viewValue: '17:00'},
    {value: '1800', viewValue: '18:00'},
    {value: '1900', viewValue: '19:00'},

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

  vehicleApInsertRes : any;
  constructor(  private insertjsonService: InsertjsonService  ) { }


  updateDOB(dateObject: any) {
    alert(dateObject.value);
    const stringified = JSON.stringify(dateObject.value);
    this.appointment = stringified.substring(1, 11);

   }
  

  getAppoinment(){

    if(this.selected){
      this.appointment = this.selected;
 
      this.d = new Date(this.appointment).toISOString();
      this.d = this.d.substring(0,10);
    }

    
    if (this.selectedmaintype && this.clientname && this.clientvehicle && this.selectedmaintype && this.d && this.timeselected){
    
      //VALUES ('$inputData->ClientName', '$inputData->VehicleDesc', '$inputData->TypeMaint', '$inputData->DateAp', '$inputData->TimeAp')";
      //    constructor(  ClientName: string, VehicleDesc: string, TypeMaint: string, DateAp : string, TimeAp : string ) {

      var appoint = new VehicleAp(this.clientname,this.clientvehicle,this.selectedmaintype,this.d,this.timeselected);
      const jsonStrVehicleAp = JSON.stringify(appoint);
    //  alert(jsonStrVehicleAp);
      this.insertjsonService.addNewVehicleAp(jsonStrVehicleAp).subscribe(
        res => {
          this.vehicleApInsertRes= res;
          this.clientname  ='';
          this.clientvehicle ='';
          this.selectedmaintype ='';
          this.appointment ='';
          this.timeselected = '';
          
          alert(this.vehicleApInsertRes['status']);
          //alert(this.selectedmaintype + " " + this.clientname + " " + this.clientvehicle + " "+ this.d + " "+ this.timeselected );
         // console.log(this.vehicleApInsertRes);
        })

      
    }else 
      alert('Fill the fields out please')
  }

}
