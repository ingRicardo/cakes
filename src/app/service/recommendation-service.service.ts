import { Injectable } from '@angular/core';
import { Item } from '../model/item';
import { DataServiceService } from './data-service.service';
@Injectable({
  providedIn: 'root'
})
export class RecommendationServiceService {
  

  constructor(private DataService : DataServiceService) {}

  getRecommendedItems(): Item[] {
    // Implement your recommendation logic here
    // For example, return a subset of items
   // const allItems = this.DataService.getItems();
   // return allItems.slice(0, 3); // Return the first 3 items as a simple example

    const shuffled = [...this.DataService.getItems()].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 2);

  }
}
