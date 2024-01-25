import { Component, EventEmitter, Output, inject } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule , FormControl} from '@angular/forms';
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation, MatStepperModule} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { InsertjsonService } from '../insertjson.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatChipInputEvent } from '@angular/material/chips';



@Component({
  selector: 'app-cake-stepper',
  templateUrl: './cake-stepper.component.html',
  styleUrl: './cake-stepper.component.css'
})
export class CakeStepperComponent {


  keywords = ['cheese', 'strawberry', 'banana', 'marmalade', 'chocolate'];
  formControlIngredients = new FormControl(['chocolate']);

  announcer = inject(LiveAnnouncer);

  removeKeyword(keyword: string) {
    const index = this.keywords.indexOf(keyword);
    if (index >= 0) {
      this.keywords.splice(index, 1);

      this.announcer.announce(`removed ${keyword}`);
    }
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our keyword
    if (value) {
      this.keywords.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();
  }


  validateString(event: any) {
     
  }

  showCreateStepsLocal = false
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  
  @Output() closeStepsEvent = new EventEmitter<boolean>();
  currentNameValue: any;
  //currentIngredientValues: any;
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
  error :any 

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

  //ingredients = new FormControl('');
  size = new FormControl('');
  shape = new FormControl('');
  eventc = new FormControl('');
  typeOfCake = 'fondant';

  //ingredientsList: string[] = ['Cheese', 'Strawberry', 'Banana', 'Marmalade', 'Chocolate'];

  fileJson !: any 
  data !: any 
  //selectedIngredients !: []

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

  validateEmail (email: any)  {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  insertValues(){
   // console.log("first values ", this.currentNameValue , "selected ingredients ", this.currentIngredientValues)

    if (this.currentNameValue && this.currentEmailValue && this.validateEmail(this.currentEmailValue)
       && this.formControlIngredients && this.typeOfCake && this.cakeSize && this.cakeEvent
      && this.cakeShape && this.currentAddressValue && this.desingOnCake &&  this.textOnCake
      && this.stringDate && this.currentCellNumberValue){

        this.error=""
        
        this.uniqueId = Math.random().toString(36).substr(2, 9);
        console.log("email => ",  this.currentEmailValue)
        this.data = {
          name: this.currentNameValue, 
          email: this.currentEmailValue,
          ingredients: this.formControlIngredients.value,
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



      this.insertjsonService.sendCakeJson(this.data, this.newDate, this.currentEmailValue).subscribe(
      res => {
        this.cakesInsertRes = res
        console.log(" JSON GENERATED  => ", this.cakesInsertRes)
      })
    }else {
      console.log("JSON NOT GENERATED")
      console.log("email => ",  this.currentEmailValue)
      console.log( " name -> ", this.currentNameValue , "\n", 
      "ingredients -> ", this.formControlIngredients.value , "\n", 
      "type -> ",this.typeOfCake , "\n",
      "size -> ",this.cakeSize , "\n",
      "event -> ",this.cakeEvent , "\n",
      "shape -> ",this.cakeShape , "\n",
      "address -> ",this.currentAddressValue , "\n",
      "designdraw -> ",this.desingOnCake , "\n",
      "textcake -> ",this.textOnCake , "\n",
      "notes -> ",this.notesArea , "\n",
      "deliverydate -> ",this.stringDate , "\n",
      "cellphone -> ",this.currentCellNumberValue , "\n",
      "uniqueId -> ",this.uniqueId , "\n",
      )
      this.error=""
      if (this.currentEmailValue)
        if (!this.validateEmail(this.currentEmailValue)) this.error="PLEASE GO BACK AND CHECK YOUR E-MAIL" 
        else  this.error=""
      else
        this.error="PLEASE GO BACK AND CHECK YOUR E-MAIL" 

      if (this.currentNameValue == undefined)
        this.error="PLEASE GO BACK AND CHECK YOUR NAME" 

      if (this.formControlIngredients == undefined)
        this.error="PLEASE GO BACK AND CHECK YOUR INGREDIENTS" 
      
      if (this.typeOfCake == undefined)
        this.error="PLEASE GO BACK AND CHECK YOUR CAKE'S TYPE" 

      if (this.cakeEvent == undefined)
        this.error="PLEASE GO BACK AND CHECK YOUR CAKE'S EVENT"   
      
      if (this.cakeShape == undefined)
        this.error="PLEASE GO BACK AND CHECK YOUR  CAKE'S SHAPE" 
      
      if (this.currentAddressValue == undefined)
        this.error="PLEASE GO BACK AND CHECK YOUR ADDRESS" 
      
      if (this.desingOnCake == undefined)
        this.error="PLEASE GO BACK AND CHECK YOUR CAKE'S DESIGN" 

      if (this.cakeSize == undefined)
        this.error="PLEASE GO BACK AND CHECK THE SIZE OF YOUR CAKE" 

      if (this.textOnCake == undefined)
        this.error="PLEASE GO BACK AND CHECK THE TEXT IN YOUR CAKE" 

      if (this.stringDate == undefined)
        this.error="PLEASE GO BACK AND CHECK YOUR DELIVERY'S DATE" 
      
      if (this.currentCellNumberValue == undefined)
        this.error="PLEASE GO BACK AND CHECK YOUR CELLPHONE NUMBER" 

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
