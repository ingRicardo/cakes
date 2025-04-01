import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { InsertjsonService } from '../insertjson.service';
import { VehicleAp } from '../vehicle-ap';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-maintlist',
  templateUrl: './maintlist.component.html',
  styleUrls: ['./maintlist.component.css']
})
export class MaintlistComponent implements AfterViewInit{

  @ViewChild(MatPaginator) paginator !: MatPaginator;

  vehiclelist : any;

/*
    clientname !:string;
    vehicledesc !: string;
    typemaint !: string;
    dateap !: string;
    timeap !: string;

*/

  displayedColumns: string[] = ['clientname', 'vehicledesc', 'typemaint', 'dateap', 'timeap'];

  dataSource = new MatTableDataSource<VehicleAp>();
 
  constructor(  private insertjsonService: InsertjsonService  ) { }

  ngOnInit() {
    this.insertjsonService.getMaintenanceList()
      .subscribe(res => {
        this.vehiclelist = res
        //console.log('VehicleList: ' + this.vehiclelist)
        this.dataSource.data = this.vehiclelist;
      });
  }


  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }



}
