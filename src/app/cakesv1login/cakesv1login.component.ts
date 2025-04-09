import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../interface/user';
import { Cakesv1Service } from '../service/cakesv1.service';
@Component({
  selector: 'app-cakesv1login',
  templateUrl: './cakesv1login.component.html',
  styleUrls: ['./cakesv1login.component.css']
})
export class Cakesv1loginComponent {

   
  @Output() tabcakesClicked = new EventEmitter<boolean>();

  istabcakesClicked: boolean = false;

  loginview: boolean = true;
  signupview: boolean = false;

  name!: string;
  username!: string;
  email!: string;
  password!: string;
  userInsertRes!: any;


  constructor(private cakesv1Service: Cakesv1Service) {}


  ngOnInit(): void {
    // Initialization logic here
  }
  sendtabCakes(){
    
    this.istabcakesClicked = true;
   // alert("Login clicked " + this.isLoginClicked);
    this.tabcakesClicked.emit(this.istabcakesClicked);

  }

  login(){
    // Perform login logic here
    console.log('Login clicked');
    this.loginview = true;
    this.signupview = false;


  }
  signup(){
    // Perform signup logic here
    console.log('Signup clicked');
    this.loginview = true;
    this.signupview = true; 

  }

  submitForm( ){ 

    // Perform form submission logic here

    if (this.loginview && this.signupview && this.name && this.username && this.email && this.password &&
       this.name.length > 0 && this.username.length > 0 && this.email.length > 0 && this.password.length > 0) {
    const user: User = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password,
      created_time: new Date().toISOString()
    };
    const jsonuser = JSON.stringify(user);
    // Call the service to add the new user
    this.cakesv1Service.addNewUser(jsonuser).subscribe(
      response => {    
        this.userInsertRes= response;
        console.log('User added successfully:', response);
        alert(this.userInsertRes['status']);
        // Reset form fields
        this.name = '';
        this.username = '';
        this.email = '';
        this.password = '';
       });


      }


    

  }


}
