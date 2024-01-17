import { Component } from '@angular/core';
import { InsertjsonService } from '../insertjson.service';

@Component({
  selector: 'app-img-carrousel',
  templateUrl: './img-carrousel.component.html',
  styleUrl: './img-carrousel.component.css'
})
export class ImgCarrouselComponent {
  
  cakesData :any
  constructor( private insertjsonService: InsertjsonService) {}

  ngOnInit() {

    this.insertjsonService.getCakesDataJson().subscribe(res => {
      this.cakesData = res[0]['jsoncakesdata'];
      console.log("FROM JSON -> ", this.cakesData)
    });
  }
}
