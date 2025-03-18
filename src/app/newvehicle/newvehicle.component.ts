import { Component } from '@angular/core';


interface Year {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-newvehicle',
  templateUrl: './newvehicle.component.html',
  styleUrl: './newvehicle.component.css'
})


export class NewvehicleComponent {

  years: Year[] = [
    {value: '1999', viewValue: '1999'},
    {value: '2000', viewValue: '2000'},
    {value: '2001', viewValue: '2001'},
  ];
    
}
