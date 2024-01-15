import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-img-carrousel',
  templateUrl: './img-carrousel.component.html',
  styleUrl: './img-carrousel.component.css'
})
export class ImgCarrouselComponent {

  url: string = '../../assets/cakesdata.js';
  cakesData :any
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      this.cakesData = res;
      console.log(this.cakesData)
    });
  }
}
