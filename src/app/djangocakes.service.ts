import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DjangocakesService {
  cakesUrl: string = 'http://127.0.0.1:8000/cakes/?format=json';
  cakesData :any

  constructor(private http: HttpClient) { }

/*  getCakes(){
    this.http.get(this.url).subscribe(res => {
      this.cakesData = res;
      console.log(" from service => ",  this.cakesData)
    });
  }
*/
  getCakes(): Observable<any[]> {
    return this.http.get<any[]>(this.cakesUrl)
  }

} 
