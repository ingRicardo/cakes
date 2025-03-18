import { Component } from '@angular/core';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrl: './vehicle.component.css'
})
export class VehicleComponent {

  buttonTitle:string = "Add Vehicle"; 
  visible:boolean = false; 

  cover:boolean = true; 

  showhideUtility(){ 
    this.visible = this.visible?false:true; 
    this.cover = this.cover?false:true; 
    this.buttonTitle = this.visible?"Hide Add Vehicle":"Add Vehicle"; 
  } 




}
