
import { Output, EventEmitter, Component } from '@angular/core';

@Component({
  selector: 'app-cakesv1horimenu',
  templateUrl: './cakesv1horimenu.component.html',
  styleUrls: ['./cakesv1horimenu.component.css']
})
export class Cakesv1horimenuComponent {

  @Output() loginClicked = new EventEmitter<boolean>();
  @Output() profileClicked = new EventEmitter<boolean>();

  isLoginClicked: boolean = false;

  isProfileClicked: boolean = false;
  constructor() { }
  
  ngOnInit() {
    // Initialization logic here
  }


  login(){
    
    this.isLoginClicked = true;
   // alert("Login clicked " + this.isLoginClicked);
    this.loginClicked.emit(this.isLoginClicked);

  }

 

  profile(){
    this.isProfileClicked = true;
    this.profileClicked.emit(this.isProfileClicked);

    
  }

}
