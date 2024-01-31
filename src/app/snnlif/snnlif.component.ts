import { Component } from '@angular/core';
import { InsertjsonService } from '../insertjson.service';
import Chart from 'chart.js/auto';
import { DomSanitizer } from '@angular/platform-browser';

import * as d3 from 'd3';


@Component({
  selector: 'app-snnlif',
  templateUrl: './snnlif.component.html',
  styleUrl: './snnlif.component.css'
})
export class SnnlifComponent {

  
  localres: any
  irisImg : any
  irisGausImg : any
  imageGaussPath : any
  imageGaussPath2 : any

  imageIrislatancy: any 
  imageIrislatancyPath: any 

  imageIrislatancy2: any 
  imageIrislatancyPath2: any 

  imagePresinaNeurons: any 
  imagePresinaNeuronsPath: any 

  imagePostsinaNeurons: any 
  imagePostsinaNeuronsPath7: any 
  imagePostsinaNeuronsPath8: any 
  imagePostsinaNeuronsPath9: any 
  imagePostsinaNeuronsPath10: any
  imagePostsinaNeuronsPath11: any
  imagePostsinaNeuronsPath12: any   

  chart: any = []
  histogram!: d3.HistogramGeneratorNumber<number, number>;
  x: any;
  imagePath: any;
  imageSynapticSpikesPath18: any;
  imageSynapticSpikesPath17: any;
  imageSynapticSpikesPath16: any;
  imageSynapticSpikesPath15: any;
  imageSynapticSpikesPath14: any;
  imageSynapticSpikesPath13: any;
  imageSynapticSpikes: any;

  // Histogram function to transform an array of numbers
// to a frequency distribution with 60 intervals

  constructor( private _sanitizer: DomSanitizer, private insertjsonService: InsertjsonService ) { }

  ngOnInit() {
 
  }


  getIrisDataImg(){

    this.insertjsonService.getIrisDataImg().subscribe(
      res =>{ this.irisImg = res
      
          console.log( ' res ==> ', this.irisImg["image"])
         
          this.imagePath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
          + this.irisImg["image"]);
          console.log( ' imagePath ==> ', this.imagePath)
      })

  }

  getIrisGaussian(){
    this.insertjsonService.getIrisGaussImg().subscribe(
      res =>{ this.irisGausImg = res
      
          console.log( ' res ==> ', this.irisGausImg["image"])
         
          this.imageGaussPath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
          + this.irisGausImg["image"]);

          this.imageGaussPath2 = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
          + this.irisGausImg["image2"]);

          console.log( ' imageGaussPath ==> ', this.imageGaussPath)
          console.log( ' imageGaussPath2 ==> ', this.imageGaussPath2)
      })
  }

  getIrisLatancy(){

    this.insertjsonService.getIrisLatancyImg().subscribe(
      res =>{ this.imageIrislatancy = res
      
          console.log( ' res ==> ', this.imageIrislatancy["image"])
         
          this.imageIrislatancyPath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
          + this.imageIrislatancy["image"]);
          console.log( ' imageIrislatancyPath ==> ', this.imageIrislatancyPath)
      })

  }

  getIrisLatancy2(){

    this.insertjsonService.getIrisLatancyImg2().subscribe(
      res =>{ this.imageIrislatancy2 = res
      
          console.log( ' res ==> ', this.imageIrislatancy2["image"])
         
          this.imageIrislatancyPath2 = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
          + this.imageIrislatancy2["image"]);
          console.log( ' imageIrislatancyPath2 ==> ', this.imageIrislatancyPath2)
      })

  }

  getIrisPresinaNeurons(){
    this.insertjsonService.getPresynapticNeuronsImg().subscribe(
      res =>{ this.imagePresinaNeurons = res
      
          console.log( ' res ==> ', this.imagePresinaNeurons["image"])
         
          this.imagePresinaNeuronsPath = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
          + this.imagePresinaNeurons["image"]);
          console.log( ' imagePresinaNeuronsPath ==> ', this.imagePresinaNeuronsPath)
      })
  }

  getIrisPostsinaNeurons(){
    this.insertjsonService.getPostsynapticNeuronsImg().subscribe(
      res =>{ this.imagePostsinaNeurons = res
      
          console.log( ' res ==> ', this.imagePostsinaNeurons["image7"])
         
          this.imagePostsinaNeuronsPath7 = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
          + this.imagePostsinaNeurons["image7"]);
          console.log( ' imagePostsinaNeuronsPath7 ==> ', this.imagePostsinaNeuronsPath7)

          this.imagePostsinaNeuronsPath8 = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
          + this.imagePostsinaNeurons["image8"]);
          console.log( ' imagePostsinaNeuronsPath8 ==> ', this.imagePostsinaNeuronsPath8)

          this.imagePostsinaNeuronsPath9 = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
          + this.imagePostsinaNeurons["image9"]);
          console.log( ' imagePostsinaNeuronsPath9 ==> ', this.imagePostsinaNeuronsPath9)

          this.imagePostsinaNeuronsPath10 = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
          + this.imagePostsinaNeurons["image10"]);
          console.log( ' imagePostsinaNeuronsPath10 ==> ', this.imagePostsinaNeuronsPath10)

          this.imagePostsinaNeuronsPath11 = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
          + this.imagePostsinaNeurons["image11"]);
          console.log( ' imagePostsinaNeuronsPath11 ==> ', this.imagePostsinaNeuronsPath11)

          this.imagePostsinaNeuronsPath12 = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
          + this.imagePostsinaNeurons["image12"]);
          console.log( ' imagePostsinaNeuronsPath12 ==> ', this.imagePostsinaNeuronsPath12)

          
      })
  }

  getIrisSynapticSpikes(){
    this.insertjsonService.getSynapticSpikesImg().subscribe(
      res =>{ this.imageSynapticSpikes = res
      
          console.log( ' res ==> ', this.imageSynapticSpikes["image13"])
         
          this.imageSynapticSpikesPath13 = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
          + this.imageSynapticSpikes["image13"]);
          console.log( ' imageSynapticSpikesPath13 ==> ', this.imageSynapticSpikesPath13)

          this.imageSynapticSpikesPath14 = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
          + this.imageSynapticSpikes["image14"]);
          console.log( ' imageSynapticSpikesPath14 ==> ', this.imageSynapticSpikesPath14)

          this.imageSynapticSpikesPath15 = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
          + this.imageSynapticSpikes["image15"]);
          console.log( ' imageSynapticSpikesPath15 ==> ', this.imageSynapticSpikesPath15)

          this.imageSynapticSpikesPath16 = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
          + this.imageSynapticSpikes["image16"]);
          console.log( ' imageSynapticSpikesPath16 ==> ', this.imageSynapticSpikesPath16)

          this.imageSynapticSpikesPath17 = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
          + this.imageSynapticSpikes["image17"]);
          console.log( ' imageSynapticSpikesPath17 ==> ', this.imageSynapticSpikesPath17)

          this.imageSynapticSpikesPath18 = this._sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' 
          + this.imageSynapticSpikes["image18"]);
          console.log( ' imageSynapticSpikesPath18 ==> ', this.imageSynapticSpikesPath18)


      })

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
