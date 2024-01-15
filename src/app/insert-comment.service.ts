import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsertCommentService {
  cakesCommentUrl = "https://web-production-b7404.up.railway.app/postcommentcake/"
  getCakeCommentsUrl = "https://web-production-b7404.up.railway.app/cakescomments/"
  
  constructor(private  httpClient:  HttpClient) { }

  sendCakeComment(name :any , comment: any): Observable<any[]> {
    return this.httpClient.post<any[]>(this.cakesCommentUrl, { "name":name , "comment" :comment })
  }

  getCakeComments(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.getCakeCommentsUrl)
  
  }
}
