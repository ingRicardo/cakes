import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable, map } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class Cakesv1Service {

  constructor(private  httpClient:  HttpClient ) {}
  userUrl: string = 'https://conisoft.org/cakes/insertcakev1user.php';
  userFoundUrl: string = 'https://conisoft.org/cakes/getcakev1user.php';

  addNewUser(newuser :any  ): Observable<any[]> {
    return this.httpClient.post<any[]>(this.userUrl, newuser)
  }

  getUser(user: any): Observable<any[]> {
    return this.httpClient.get<any[]>(this.userFoundUrl) 
  }
}
