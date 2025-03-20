import { Component } from '@angular/core';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrl: './vehicle.component.css'
})
export class VehicleComponent {

  buttonTitle:string = "Add Vehicle";
  buttonTitleVehi:string = "Show Vehicles";
  visible:boolean = false; 
  list:boolean = false;
  cover:boolean = true; 

  showhideUtility(){ 

 
    this.visible = this.visible?false:true; 
    this.buttonTitle = this.visible?"Hide Add Vehicle":"Add Vehicle"; 

    if(this.visible){
      this.list = false;
      this.cover = false;
    }else
      this.cover = true;

  } 

  showHideVehicles(){
    this.list = this.list?false:true; 
    this.buttonTitleVehi = this.list?"Hide Vehicles":"Show Vehicles"; 

    if(this.list){
      this.visible=false;
      this.cover = false;
    }else
      this.cover = true;

  }



}
