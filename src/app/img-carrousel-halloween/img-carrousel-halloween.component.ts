import { Component } from '@angular/core';
import { InsertjsonService } from '../insertjson.service';

@Component({
  selector: 'app-img-carrousel-halloween',
  templateUrl: './img-carrousel-halloween.component.html',
  styleUrl: './img-carrousel-halloween.component.css'
})
export class ImgCarrouselHalloweenComponent {


  cakeData :any
  constructor( private insertjsonService: InsertjsonService) {}

  ngOnInit() {
    this.insertjsonService.getCakesDataJson().subscribe(res => {

      this.cakeData = res[0]['jsoncakesdata'].filter((item: { event: any; }) => item.event === 'halloween');
      console.log("filtering ==> ",this.cakeData);
    });

  }

}
