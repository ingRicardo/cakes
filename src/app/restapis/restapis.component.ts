import { Component } from '@angular/core';

import { DjangocakesService } from '../djangocakes.service';
import { InsertjsonService } from '../insertjson.service';
import { InsertCommentService } from '../insert-comment.service';
@Component({
  selector: 'app-restapis',
  templateUrl: './restapis.component.html',
  styleUrl: './restapis.component.css'
})
export class RestapisComponent {

cakesDataDjango: any
cakesInsertRes : any
cakesComments : any 

dateObj = new Date();
month   = this.dateObj.getMonth() + 1; // months from 1-12
day     = this.dateObj.getDate();
year    = this.dateObj.getFullYear();

newDate = this.year + "-" + this.month + "-" + this.day;

jsondata = {
  name: "", 
  ingredients: "",
  type:"3 MILKS",
  size: "", 
  event: "BIRTHDAY",
  address: "LOBOS",
  designdraw: "WONDERBITCH",
  textcake: "HAPPY PUSSY ",
  notes: "TESTINGG THE DATE",
  deliverydate: "TEST",
  cellphone: "",
  uniqueId: "232EED"
};

constructor(private djangocakesService: DjangocakesService, private insertjsonService: InsertjsonService, private insertCommentService: InsertCommentService) { }
callDjangoService() {

this.djangocakesService.getCakes().subscribe(
  res => {
    this.cakesDataDjango = res;
    console.log("restApi component => ", this.cakesDataDjango)
})
}
insertJson(){
  this.insertjsonService.sendCakeJson(this.jsondata, this.newDate , "").subscribe(
    res => {
      this.cakesInsertRes = res
      console.log("restApiInsert component => ", this.cakesInsertRes)

    })
}

getCakesComments(){
  this.insertCommentService.getCakeComments().subscribe(
    res => {
      this.cakesComments = res 
      console.log("get cakes comments => ", this.cakesComments)
    })
}

}
