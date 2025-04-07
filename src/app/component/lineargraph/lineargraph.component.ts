import { AfterViewInit, Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-lineargraph',
  templateUrl: './lineargraph.component.html',
  styleUrls: ['./lineargraph.component.css']
})
export class LineargraphComponent implements AfterViewInit{
  ctx  : any;
  myChart: any = [];
  
  ngAfterViewInit() {
   // this.ctx = document.getElementById('myChart');
    
    if (typeof document !== 'undefined') {   this.ctx =document.getElementById('myChart');

      this.myChart = new Chart(this.ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [{
            label: 'My First dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            
          }
        }
      });


      
     }



  }

}
