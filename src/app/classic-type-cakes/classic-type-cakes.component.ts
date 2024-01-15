import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-classic-type-cakes',
  templateUrl: './classic-type-cakes.component.html',
  styleUrl: './classic-type-cakes.component.css'
})
export class ClassicTypeCakesComponent {

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
