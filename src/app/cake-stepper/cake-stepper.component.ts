import { Component, EventEmitter, Output } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule , FormControl} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation, MatStepperModule} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { InsertjsonService } from '../insertjson.service';



@Component({
  selector: 'app-cake-stepper',
  templateUrl: './cake-stepper.component.html',
  styleUrl: './cake-stepper.component.css'
})
export class CakeStepperComponent {


  validateString(event: any) {
     
  }

  showCreateStepsLocal = false
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  
  @Output() closeStepsEvent = new EventEmitter<boolean>();
  currentNameValue: any;
  currentIngredientValues: any;
  cakeSize: any;
  cakeEvent: any;
  currentAddressValue: any;
  currentCellNumberValue: any;
  orderId : any;
  stringDate !: string
  notesArea: any;
  textOnCake: any;
  desingOnCake: any;
  cakesInsertRes : any
  uniqueId : any

  dateObj = new Date();
  month   = this.dateObj.getMonth() + 1; // months from 1-12
  day     = this.dateObj.getDate();
  year    = this.dateObj.getFullYear();

  newDate = this.year + "-" + this.month + "-" + this.day;
  cakeShape: any;
  currentEmailValue: any;
  //currentEmailValue: any;

  closeStepsEventFunc(value: boolean) {
    this.closeStepsEvent.emit(value);
  }

  ingredients = new FormControl('');
  typeOfCake = 'fondant';

  ingredientsList: string[] = ['Cheese', 'Strawberry', 'Banana', 'fruits', 'Marmalade', 'Chocolate'];

  fileJson !: any 
  data !: any 
  selectedIngredients !: []

  disableSelect = new FormControl(false);

 
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  stepperOrientation: Observable<StepperOrientation>;

  constructor(
    private _formBuilder: FormBuilder,
    breakpointObserver: BreakpointObserver, private insertjsonService: InsertjsonService
  ) {
    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical')));
  }


  getDateString(dateItem: string){
    console.log("Date received => ", dateItem)
    this.stringDate = dateItem
  }

  insertValues(){
   // console.log("first values ", this.currentNameValue , "selected ingredients ", this.currentIngredientValues)
    this.uniqueId = Math.random().toString(36).substr(2, 9);
    console.log("email => ",  this.currentEmailValue)
    this.data = {
      name: this.currentNameValue, 
      ingredients: this.currentIngredientValues,
      type:this.typeOfCake,
      size: this.cakeSize , 
      event: this.cakeEvent,
      shape: this.cakeShape,
      address: this.currentAddressValue,
      designdraw: this.desingOnCake,
      textcake: this.textOnCake,
      notes: this.notesArea,
      deliverydate: this.stringDate,
      cellphone: this.currentCellNumberValue,
      uniqueId: this.uniqueId
    };
    if (this.currentNameValue){
    this.insertjsonService.sendCakeJson(this.data, this.newDate, this.currentEmailValue).subscribe(
      res => {
        this.cakesInsertRes = res
        console.log("Insert JSON  => ", this.cakesInsertRes)
  
      })
      
    }
      /*
    this.fileJson = new File([JSON.stringify(this.data)], "file.json", {type: "application/json'"}); 
    console.log("json --> ", this.data)
    console.log("name ",this.data.name)
    console.log("ingredients -> ")
    this.orderId = this.data.uniqueId
    this.selectedIngredients = this.data.ingredients
    if (this.data.ingredients)
    for( var i = 0; i < this.data.ingredients.length; i++){
      console.log(  this.data.ingredients[i])
    }
    */
  }


}
