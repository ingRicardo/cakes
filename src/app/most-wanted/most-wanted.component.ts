import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

import { InsertjsonService } from '../insertjson.service';

@Component({
  selector: 'app-most-wanted',
  templateUrl: './most-wanted.component.html',
  styleUrl: './most-wanted.component.css'
})
export class MostWantedComponent {

  getcakesInsertRes: any
  getCakesType :any
  classiccount = 0
  threemilkscount =0
  fondantcount = 0
  mixedcount =0
  chart: any = []

  constructor(  private insertjsonService: InsertjsonService ) { }

  ngOnInit() {

      this.insertjsonService.getCakesJsonType().subscribe(
        res =>{
          this.getCakesType = res
          console.log("restApiGetCakesInsert component TYPE : ", this.getCakesType )
       
          for (let i = 0; i < this.getCakesType.length; i++) {
            if (this.getCakesType[i] == 'classic')
              this.classiccount = this.classiccount + 1
            else if (this.getCakesType[i] == '3 MILKS' || this.getCakesType[i] == '3 Milks' || this.getCakesType[i] == '3milks')
              this.threemilkscount = this.threemilkscount + 1
            else if(this.getCakesType[i] == 'fondant')  
              this.fondantcount = this.fondantcount +  1
            else if (this.getCakesType[i] == 'mixed')
              this.mixedcount = this.mixedcount + 1
          }
          this.chart = new Chart('canvas', {
            type: 'bar',
            data: {
              labels:  ['Classic', 'Fondant', 'Mixed', '3 Milks'],
              datasets: [
                {
                  label: '# of Cakes',
                  data: [this.classiccount, this.fondantcount, this.mixedcount, this.threemilkscount],
                  borderWidth: 1,
                },
              ],
            },
            options: {
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          });
          
        })
     
  }

  getinsertCakesJson(){

  }
  ngOnDestroy(){
     
    this.chart.destroy()
  }

}
