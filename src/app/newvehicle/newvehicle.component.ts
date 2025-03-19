import { Component } from '@angular/core';
import { Vehicle } from '../vehicle';

interface Year {
  value: string;
  viewValue: string;
}

interface Make {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-newvehicle',
  templateUrl: './newvehicle.component.html',
  styleUrl: './newvehicle.component.css'
})


export class NewvehicleComponent {
    carmodel !: string;
    selectedyear !: string;
    selectedmake !: string;
  years: Year[] = [
    {value: '1999', viewValue: '1999'},
    {value: '2000', viewValue: '2000'},
    {value: '2001', viewValue: '2001'},
  ];

  makes: Make[] = [
    {value: 'Ford', viewValue: 'Ford'},
    {value: 'Nissan ', viewValue: 'Nissan'},
    {value: 'Mazda', viewValue: 'Mazda'},
  ];

  showVehicle(){
    if (this.carmodel && this.selectedyear && this.selectedmake ){
      var vehic = new Vehicle(this.carmodel, this.selectedyear, this.selectedmake);
      alert (vehic.model + " "+ vehic.year + " "+ vehic.make);
    }

  }
    
}
