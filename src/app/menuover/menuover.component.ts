import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menuover',
  templateUrl: './menuover.component.html',
  styleUrl: './menuover.component.css'
})
export class MenuoverComponent {

  @Output() showClassicEvent = new EventEmitter<boolean>();
  @Output() showCreateCakeEvent = new EventEmitter<boolean>();
  @Output() showCommentSecEvent = new EventEmitter<boolean>();
  @Output() showMostWantedEvent = new EventEmitter<boolean>();
  @Output() showContactEvent = new EventEmitter<boolean>();

 
  showComment = true
  showMost = true
  showContact= true
  showClassic = true
  showCreateCake = true

  txtmost = "Most wanted"
  txtcomment = "Comment"
  txtcontact = "Contact Us";

  showClassicFunc(value: boolean) {
    
    this.showClassicEvent.emit(value);
    console.log ("from child ", value)
  }

  showCreateCakeFunc(value: boolean){
    this.showCreateCakeEvent.emit(value)
    console.log("from child  howCreateCakeEvent ====", value)
  }

  showCommentSecFunct(value: boolean){
    this.showComment = value
    this.showComment = !this.showComment
    if (this.showComment)
      this.txtcomment = "Comment"
    else
      this.txtcomment = "X Comment"

    console.log("toggle showcomment value ", this.showComment)
    this.showCommentSecEvent.emit(value)
  }

  showMostFunc(value: boolean) {

    this.showMost = value
    this.showMost = !this.showMost
    if (this.showMost)
      this.txtmost = "Most wanted"
    else
      this.txtmost = "X Most"

    console.log("toggle showMost value ", this.showMost)
    this.showMostWantedEvent.emit(value)

  }

  showContactFunc(value: boolean) {
    this.showContact = value
    this.showContact = !this.showContact
    if (this.showContact)
      this.txtcontact = "Contact US"
    else
      this.txtcontact = "X Contact US"

    console.log("toggle showContact value ", this.showContact)
    this.showContactEvent.emit(value)
   }


}
