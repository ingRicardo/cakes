import { Component } from '@angular/core';
import { InsertjsonService } from '../insertjson.service';

@Component({
  selector: 'app-img-carrousel-christmas',
  templateUrl: './img-carrousel-christmas.component.html',
  styleUrl: './img-carrousel-christmas.component.css'
})
export class ImgCarrouselChristmasComponent {

  cakeData :any
  constructor( private insertjsonService: InsertjsonService) {}

  ngOnInit() {
    this.insertjsonService.getCakesDataJson().subscribe(res => {

      this.cakeData = res[0]['jsoncakesdata'].filter((item: { event: any; }) => item.event === 'christmas');
      console.log("filtering ==> ",this.cakeData);
    });

  }


}
