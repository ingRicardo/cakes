import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import { InsertjsonService } from '../insertjson.service';
import { Vehicle } from '../vehicle';
@Component({
  selector: 'app-vehiclelist',
  templateUrl: './vehiclelist.component.html',
  styleUrl: './vehiclelist.component.css'
})
export class VehiclelistComponent  implements AfterViewInit {
  vehiclelist : any;

  displayedColumns: string[] = ['year', 'model', 'make'];

  dataSource = new MatTableDataSource<Vehicle>();

  constructor(  private insertjsonService: InsertjsonService  ) { }

  ngOnInit() {
    this.insertjsonService.getVehiclelist()
      .subscribe(res => {
        this.vehiclelist = res
        //console.log('VehicleList: ' + this.vehiclelist)
        this.dataSource.data = this.vehiclelist;
      });
  }
  @ViewChild(MatPaginator) paginator !: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


}
