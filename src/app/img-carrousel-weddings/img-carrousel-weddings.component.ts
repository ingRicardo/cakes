import { Component } from '@angular/core';
import { InsertjsonService } from '../insertjson.service';

@Component({
  selector: 'app-img-carrousel-weddings',
  templateUrl: './img-carrousel-weddings.component.html',
  styleUrl: './img-carrousel-weddings.component.css'
})
export class ImgCarrouselWeddingsComponent {

  cakeData :any
  constructor( private insertjsonService: InsertjsonService) {}

  ngOnInit() {
    this.insertjsonService.getCakesDataJson().subscribe(res => {

      this.cakeData = res[0]['jsoncakesdata'].filter((item: { event: any; }) => item.event === 'wedding');
      console.log("filtering ==> ",this.cakeData);
    });

  }


}
