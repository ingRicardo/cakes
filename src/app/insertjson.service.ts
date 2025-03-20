import {Inject, Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable, map } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class InsertjsonService {
  cakesUrl: string = 'https://web-production-b7404.up.railway.app/postjsoncake/';
  //cakesUrl: string = 'http://127.0.0.1:8000/postjsoncake/';

  getcakesUrl : string ='https://web-production-b7404.up.railway.app/cakesjson/'
  //getcakesUrl : string ='http://127.0.0.1:8000/cakesjson/'


  getcakesDataUrl : string = "https://web-production-b7404.up.railway.app/cakesdatajson/"
  //getcakesDataUrl : string = "http://127.0.0.1:8000/cakesdatajson/"

  //getirisdataset : string = "http://127.0.0.1:8000/lifsnn/dataset"
  getirisdataset : string = "https://web-production-b7404.up.railway.app/lifsnn/dataset"
  
  //getirisidataimg : string = "http://127.0.0.1:8000/lifsnn/irisdataimg"
  getirisidataimg : string = "https://web-production-b7404.up.railway.app/lifsnn/irisdataimg"


  //getirisgaussian : string = "http://127.0.0.1:8000/lifsnn/irisgaussian"
  getirisgaussian : string = "https://web-production-b7404.up.railway.app/lifsnn/irisgaussian"
  

  //getirislatancy : string = "http://127.0.0.1:8000/lifsnn/irislatancy"
  getirislatancy : string = "https://web-production-b7404.up.railway.app/lifsnn/irislatancy"
  
  //getirislatancy2 : string = "http://127.0.0.1:8000/lifsnn/irislatancy2"
  getirislatancy2 : string = "https://web-production-b7404.up.railway.app/lifsnn/irislatancy2"
  
  //presynapneurons : string ="http://127.0.0.1:8000/lifsnn/irispresynapneurons"
  presynapneurons : string ="https://web-production-b7404.up.railway.app/lifsnn/irispresynapneurons"


  //postsynapticneurons: string = "http://127.0.0.1:8000/lifsnn/irispostsynneu"
  postsynapticneurons: string = "https://web-production-b7404.up.railway.app/lifsnn/irispostsynneu"
 

  //synapticspikes : string = "http://127.0.0.1:8000/lifsnn/irissynapticspikes"
  synapticspikes : string = "https://web-production-b7404.up.railway.app/lifsnn/irissynapticspikes"


  newvehicle_URL: string = "https://conisoft.org/cakes/insertvehicle.php";


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

  getIrisDataJson(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.getirisdataset)
  }

  getIrisDataImg(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.getirisidataimg)
  }

  getIrisGaussImg(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.getirisgaussian)
  }
  getIrisLatancyImg(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.getirislatancy)
  }

  getIrisLatancyImg2(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.getirislatancy2)
  }

  getPresynapticNeuronsImg(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.presynapneurons)
  }

  getPostsynapticNeuronsImg(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.postsynapticneurons)
  }
  getSynapticSpikesImg(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.synapticspikes)
  }

  addNewVehicle(newvehicle :any  ): Observable<any[]> {
    return this.httpClient.post<any[]>(this.newvehicle_URL, newvehicle)
  }

}


