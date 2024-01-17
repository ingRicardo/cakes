import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InsertjsonService } from '../insertjson.service';

@Component({
  selector: 'app-img-carrousel',
  templateUrl: './img-carrousel.component.html',
  styleUrl: './img-carrousel.component.css'
})
export class ImgCarrouselComponent {

 // url: string = '../../assets/cakesdata.js';
  cakesData :any
 // cakesDataJson :any
  constructor(private http: HttpClient,  private insertjsonService: InsertjsonService) {}

  ngOnInit() {
  /*  this.http.get(this.url).subscribe(res => {
      this.cakesData = res;
      console.log("FROM LOCAL JSON -> ",this.cakesData)
    });
  */
    this.insertjsonService.getCakesDataJson().subscribe(res => {
      this.cakesData = res[0]['jsoncakesdata'];
    //  this.cakesData = this.cakesDataJson[0]['jsoncakesdata']
      console.log("FROM JSON -> ", this.cakesData)
    });
  }
}
