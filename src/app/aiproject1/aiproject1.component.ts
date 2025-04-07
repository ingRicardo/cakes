import { Component } from '@angular/core';
import { RecommendationServiceService } from '../service/recommendation-service.service';

@Component({
  selector: 'app-aiproject1',
  templateUrl: './aiproject1.component.html',
  styleUrls: ['./aiproject1.component.css']
})
 

export class Aiproject1Component {

  /*
  items = [
    { id: 1, name: "Product A", description: "A great product." },
    { id: 2, name: "Product B", description: "Another good product." },
    { id: 3, name: "Product C", description: "An interesting product." },
  ];

  */
  //recommendations: { id: number; name: string; description: string; }[];

  recom :  any
  //  { id: 1, title: 'Movie A', description: 'A great movie.' },

  constructor(RecommendationService: RecommendationServiceService) {
   // this.recommendations = this.getRecommendations(2);
    this.recom = RecommendationService.getRecommendedItems();
  }

  /*
  getRecommendations(count: number) {
    const shuffled = [...this.items].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }
  */



}
