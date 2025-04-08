import { Component } from '@angular/core';
import { Cakesv1cake } from '../interface/cakesv1cake';

/*
    breadflavor: string;
    fillingflavor: string;
    cover: string;
    size: string;
    shape: string;
    layers: string;
    decoration: string;
    frosting: string;
    texture: string;
    comments: string;
    addingredients: string;
*/

export const CAKES: Cakesv1cake[] = [
  { id: 12, name: 'birthdaycake1', url: 'assets/img/birthdaycake.jpg', occasion: 'birthday', 
    breadflavor: 'chocolate', fillingflavor: '', cover: '',size:'', shape:'', layers: '', decoration: '', frosting: '',texture: '', comments: '', addingredients: ''},
  { id: 13, name: 'birthdaycake2', url: 'assets/img/birthdaycake2.jpg', occasion: 'birthday',
    breadflavor: 'chocolate', fillingflavor: '', cover: '',size:'', shape:'', layers: '', decoration: '', frosting: '',texture: '', comments: '', addingredients: ''
   },
  { id: 14, name: 'birthdaycake3', url: 'assets/img/birthdaycake3.jpg', occasion: 'birthday',
    breadflavor: 'vanilla', fillingflavor: '', cover: '',size:'', shape:'', layers: '', decoration: '', frosting: '',texture: '', comments: '', addingredients: ''
   },
  { id: 15, name: 'birthdaycake4' , url: 'assets/img/birthdaycake4.jpg', occasion: 'birthday',
     breadflavor: 'strawberry', fillingflavor: '', cover: '',size:'', shape:'', layers: '', decoration: '', frosting: '',texture: '', comments: '', addingredients: ''
  },
  { id: 16, name: 'birthdaycake5', url: 'assets/img/birthdaycake5.jpg', occasion: 'birthday',
     breadflavor: 'chocolate', fillingflavor: '', cover: '',size:'', shape:'', layers: '', decoration: '', frosting: '',texture: '', comments: '', addingredients: ''
   },
  { id: 17, name: 'birthdaycake6', url: 'assets/img/birthdaycake6.jpg', occasion: 'birthday',
     breadflavor: 'vanilla', fillingflavor: '', cover: '',size:'', shape:'', layers: '', decoration: '', frosting: '',texture: '', comments: '', addingredients: ''
   },
  { id: 18, name: 'birthdaycake16', url: 'assets/img/birthdaycake16.jpg', occasion: 'birthday',
     breadflavor: 'lemon', fillingflavor: '', cover: '',size:'', shape:'', layers: '', decoration: '', frosting: '',texture: '', comments: '', addingredients: ''
   },
  { id: 19, name: 'birthdaycake17' , url: 'assets/img/birthdaycake17.jpg', occasion: 'birthday',
     breadflavor: 'chocolate', fillingflavor: '', cover: '',size:'', shape:'', layers: '', decoration: '', frosting: '',texture: '', comments: '', addingredients: ''
  },
  { id: 20, name: 'birthdaycake18', url: 'assets/img/birthdaycake18.jpg', occasion: 'birthday',
     breadflavor: 'vanilla', fillingflavor: '', cover: '',size:'', shape:'', layers: '', decoration: '', frosting: '',texture: '', comments: '', addingredients: ''
   },
  { id: 9, name: 'christmas9', url: 'assets/img/christmas9.jpg', occasion: 'christmas',
    breadflavor: 'vanilla', fillingflavor: '', cover: '',size:'', shape:'', layers: '', decoration: '', frosting: '',texture: '', comments: '', addingredients: ''
  }
];

@Component({
  selector: 'app-cakesv1tabs',
  templateUrl: './cakesv1tabs.component.html',
  styleUrls: ['./cakesv1tabs.component.css']
})
export class Cakesv1tabsComponent {
  cakes = CAKES;

  selectedCake?: Cakesv1cake;

  ngOnInit() {

    this.cakes = this.cakes.filter(t=>t.occasion ==='birthday');

  }


/*
  onSelect(cake: Cakesv1cake): void {
    this.selectedCake = cake;
    alert(this.selectedCake);
  }
 */   
}
