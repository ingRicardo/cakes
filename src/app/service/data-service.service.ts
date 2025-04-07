import { Injectable } from '@angular/core';
import { Item } from '../model/item';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }

  items: Item[] = [
    { id: 1, title: 'Movie A', description: 'A great movie.' },
    { id: 2, title: 'Movie B', description: 'Another great movie.' },
    { id: 3, title: 'Movie c', description: 'Another bad movie.' },
    { id: 4, title: 'Movie d', description: 'Another regular movie.' },
    { id: 5, title: 'Movie e', description: 'Another horrible movie.' },
    // ... more items
  ];

  getItems(): Item[] {
    return this.items;
  }
}
