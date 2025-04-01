import { Component } from '@angular/core';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrl: './vehicle.component.css'
})
export class VehicleComponent {


  visible:boolean = false; 
  list:boolean = false;
  cover:boolean = true; 
  maintenance:boolean = false;

  maintenanceList:boolean = false;

  showhideUtility(){ 

 
    this.visible = this.visible?false:true; 

    if(this.visible){
      this.list = false;
      this.cover = false;
      this.maintenance = false;
      this.maintenanceList =  false;

    }else
      this.cover = true;

  } 

  showHideVehicles(){
    this.list = this.list?false:true; 

    if(this.list){
      this.visible=false;
      this.cover = false;
      this.maintenance = false;
      this.maintenanceList =  false;

    }else
      this.cover = true;

  }

  showHideCarmaintenance(){

    this.maintenance = this.maintenance?false:true; 


    if(this.maintenance){
      this.cover = false;
      this.list = false;
      this.visible=false;
      this.maintenanceList =  false;

    }else 
      this.cover = true;

  }
  showHideCarmaintenanceList(){

    this.maintenanceList = this.maintenanceList?false:true; 

    if(this.maintenanceList){
      this.cover = false;
      this.list = false;
      this.visible=false;
      this.maintenance =  false;

    }else 
      this.cover = true;

  
  }
}
