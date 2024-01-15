import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  showFiller = false;
  localClassicVal  = false
  showCreateSteps = false
  showCommentSecFlag !: boolean
  showMostFlag !: boolean
  showContactFlag !: boolean

  getShowCreateStepsFunc(event: boolean){
    this.showCreateSteps = event
    console.log("from parent : ", this.showCreateSteps)

  }
  receiveClassic(event: boolean) {
    this.localClassicVal = event
    console.log('from parent : ', this.localClassicVal) 
  }

  closeClassic(value: boolean){
    console.log('from parent close classic : ',value) 
    this.localClassicVal = value
  }

  closeCreateSteps(value : boolean){
    console.log('from parent close steps : ', value)
    this.showCreateSteps = value
  }

  getCommentFlag(value : boolean){
    this.showCommentSecFlag = value
    console.log(" showCommentSecFlag ===> ", this.showCommentSecFlag)
  }

  getMostFlag(value : boolean){
    this.showMostFlag = value
    console.log( "showMostFlag ==> ", this.showMostFlag)
  }

  getContactFlag(value : boolean){
    this.showContactFlag = value
    console.log( "showContactFlag ==> ", this.showContactFlag)

  }
}
