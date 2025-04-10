import { Component } from '@angular/core';
import { get } from 'http';

@Component({
  selector: 'app-cakesv1',
  templateUrl: './cakesv1.component.html',
  styleUrls: ['./cakesv1.component.css']
})
export class Cakesv1Component {

  loggingIn: boolean = false;
  tabcakes : boolean = false;

  profile: boolean = false;

  constructor() { }

  ngOnInit(): void {
    //alert("Cakesv1 Component Initialized");
  }

  getLogin(newItem: boolean){
  //  alert("Parent Login clicked " + newItem);
    this.loggingIn = newItem;
    this.profile = false;
  }

  getCakes(newItem1: boolean){
   // alert("Parent Cakes clicked " + newItem);
    this.tabcakes = newItem1;
  //  alert("Parent Cakes clicked " + this.tabcakes);
    this.loggingIn = false;

  }

  getProfile(newItem2: boolean){  
  
  this.profile = newItem2;
  this.loggingIn = false;
  this.tabcakes = false;

  //alert( this.profile);

  }

}
