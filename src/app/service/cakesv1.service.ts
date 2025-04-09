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


  addNewUser(newuser :any  ): Observable<any[]> {
    return this.httpClient.post<any[]>(this.userUrl, newuser)
  }


}
