import { Component } from '@angular/core';
import { InsertjsonService } from '../insertjson.service';
@Component({
  selector: 'app-vehiclelist',
  templateUrl: './vehiclelist.component.html',
  styleUrl: './vehiclelist.component.css'
})
export class VehiclelistComponent {
  vehiclelist : any

  constructor(  private insertjsonService: InsertjsonService  ) { }

  ngOnInit() {
    this.insertjsonService.getVehiclelist()
      .subscribe(res => {
        this.vehiclelist = res
        //console.log('VehicleList: ' + this.vehiclelist)
      });
  }



}
