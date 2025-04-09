import { Component } from '@angular/core';

@Component({
  selector: 'app-cakesv1',
  templateUrl: './cakesv1.component.html',
  styleUrls: ['./cakesv1.component.css']
})
export class Cakesv1Component {

  loggingIn: boolean = false;
  tabcakes : boolean = false;

  getLogin(newItem: boolean){
  //  alert("Parent Login clicked " + newItem);
    this.loggingIn = newItem;
  }

  getCakes(newItem1: boolean){
   // alert("Parent Cakes clicked " + newItem);
    this.tabcakes = newItem1;
  //  alert("Parent Cakes clicked " + this.tabcakes);
    this.loggingIn = false;

  }

}
