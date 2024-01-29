import { Component } from '@angular/core';
import { InsertjsonService } from '../insertjson.service';
import Chart from 'chart.js/auto';

import * as d3 from 'd3';


@Component({
  selector: 'app-snnlif',
  templateUrl: './snnlif.component.html',
  styleUrl: './snnlif.component.css'
})
export class SnnlifComponent {
  localres: any

  chart: any = []
  histogram!: d3.HistogramGeneratorNumber<number, number>;
  x: any;

  // Histogram function to transform an array of numbers
// to a frequency distribution with 60 intervals



  constructor(  private insertjsonService: InsertjsonService ) { }

  
  
  ngOnInit() {
 /*   this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
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
    */

  }


  getDataset(){
 
   // this.chart.destroy();
   // this.chart = null;

    this.insertjsonService.getIrisDataJson().subscribe(
      res =>{
        console.log(res)
        this.localres = res 
        console.log(this.localres["sepal_length"]) 
        console.log(this.localres["sepal_width"]) 
        console.log(this.localres["petal_length"]) 
        console.log(this.localres["petal_width"]) 
        console.log("sepal_length length --> ", this.localres["sepal_length"].length)
        /*
        this.chart = new Chart('canvas', {
          type: 'bar',
          data: {
            labels: ['sepal_length'],
            datasets: [
              {
                label: '# of Votes',
                data: [this.localres["sepal_length"][0] ],
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

        */
 
        
        this.chart = new Chart("canvas", {
          type: 'bar', //this denotes tha type of chart
    
          data: {// values on X-Axis
         /*   labels: ['2022-05-10', '2022-05-11', '2022-05-12','2022-05-13',
                     '2022-05-14', '2022-05-15', '2022-05-16','2022-05-17', ], */
             datasets: [
              {
                label: "sepal_length",
                data:  this.localres["sepal_length"] ,
                backgroundColor: 'blue'
              },
              {
                label: "sepal_width",
                data: this.localres["sepal_width"],
                backgroundColor: 'limegreen'
              } ,
              {
                label: "petal_length",
                data: this.localres["petal_length"],
                backgroundColor: 'red'
              },
              {
                label: "petal_width",
                data: this.localres["petal_width"],
                backgroundColor: 'orange'
              } 
            ]
          },
          options: {
            aspectRatio:2.5
          }
          
        });

    
      })
  }

  ngOnDestroy() {


  }
}
