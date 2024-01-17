import {Inject, Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsertjsonService {
  cakesUrl: string = 'https://web-production-b7404.up.railway.app/postjsoncake/';
  getcakesUrl : string ='https://web-production-b7404.up.railway.app/cakesjson/'
  getcakesDataUrl : string = "https://web-production-b7404.up.railway.app/cakesdatajson/"

  constructor(private  httpClient:  HttpClient ) {}
  
  sendCakeJson(json :any , date: any, email: any): Observable<any[]> {
    return this.httpClient.post<any[]>(this.cakesUrl, { "jsondata":json , "created_date" :date, "email" : email })
  }

  getCakesJson(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.getcakesUrl)
  }

  getCakesDataJson(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.getcakesDataUrl)
  }

  getCakesJsonType(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.getcakesUrl)
    .pipe(
      map(cake => cake.map(t =>  t.jsondata.type))
    )
  }

}


