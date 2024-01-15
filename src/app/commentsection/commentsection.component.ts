import { Component } from '@angular/core';
import { InsertCommentService } from '../insert-comment.service';

@Component({
  selector: 'app-commentsection',
  templateUrl: './commentsection.component.html',
  styleUrl: './commentsection.component.css'
})
export class CommentsectionComponent {

  cakesComments : any
  userName: any;
  commentArea: any;

  cakepostres : any
  constructor(private insertCommentService: InsertCommentService){}

  ngOnInit() {
    
    this.insertCommentService.getCakeComments().subscribe(
      res => {
        this.cakesComments = res 
        console.log("get cakes comments section  => ", this.cakesComments)
      })
  }
  insertComment() {
    if (this.userName && this.commentArea )
    this.insertCommentService.sendCakeComment(this.userName, this.commentArea).subscribe(
      res => {
        this.cakepostres = res
        console.log("Insert comment JSON  => ", this.cakepostres)
        this.insertCommentService.getCakeComments().subscribe(
          res => {
            this.cakesComments = res 
            console.log("get cakes comments section  => ", this.cakesComments)
          })

      })
  }
}
