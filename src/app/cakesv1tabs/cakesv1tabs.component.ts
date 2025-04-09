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
  },
  { id: 10, name: 'christmas10', url: 'assets/img/christmas10.jpg', occasion: 'christmas',
    breadflavor: 'vanilla', fillingflavor: '', cover: '',size:'', shape:'', layers: '', decoration: '', frosting: '',texture: '', comments: '', addingredients: ''
  },
  { id: 11, name: 'christmas11', url: 'assets/img/christmas11.jpg', occasion: 'christmas',
    breadflavor: 'vanilla', fillingflavor: '', cover: '',size:'', shape:'', layers: '', decoration: '', frosting: '',texture: '', comments: '', addingredients: ''
  },
  { id: 26, name: 'christmas26', url: 'assets/img/christmas26.jpg', occasion: 'christmas',
    breadflavor: 'vanilla', fillingflavor: '', cover: '',size:'', shape:'', layers: '', decoration: '', frosting: '',texture: '', comments: '', addingredients: ''
  },
  { id: 6, name: 'halloween6', url: 'assets/img/halloween6.jpg', occasion: 'halloween',
    breadflavor: 'vanilla', fillingflavor: '', cover: '',size:'', shape:'', layers: '', decoration: '', frosting: '',texture: '', comments: '', addingredients: ''
  },
  { id: 7, name: 'halloween7', url: 'assets/img/halloween7.jpg', occasion: 'halloween',
    breadflavor: 'vanilla', fillingflavor: '', cover: '',size:'', shape:'', layers: '', decoration: '', frosting: '',texture: '', comments: '', addingredients: ''
  },
  { id: 8, name: 'halloween8', url: 'assets/img/halloween8.jpg', occasion: 'halloween',
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
  cakesholi = CAKES;
  selectedCake?: Cakesv1cake;

  ngOnInit() {

    this.cakes = this.cakes.filter(t=>t.occasion ==='birthday');
    this.cakesholi = this.cakesholi.filter(t=> t.occasion ==='christmas' || t.occasion ==='halloween');

  }


/*
  onSelect(cake: Cakesv1cake): void {
    this.selectedCake = cake;
    alert(this.selectedCake);
  }
 */   
}
