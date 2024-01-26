import { Component } from '@angular/core';
import { InsertjsonService } from '../insertjson.service';

@Component({
  selector: 'app-listoforders',
  templateUrl: './listoforders.component.html',
  styleUrl: './listoforders.component.css'
})
export class ListofordersComponent {
 
  localres :any
  error: any
placeId: any;
  constructor(  private insertjsonService: InsertjsonService ) { }
  jsondataFound : any
  ngOnInit() {
 
  }

  searchById(id:any){
    //vas7i6x4b
    this.jsondataFound = ""
    this.error =""
    this.insertjsonService.getCakesJson().subscribe(
      res =>{
        this.localres = res
        for (let i = 0; i <this.localres.length; i++) {
          if( this.localres[i]['jsondata']['uniqueId'] === id){
            this.jsondataFound = this.localres[i]['jsondata']
            break
          }
        }
        this.error =""
        
      })

      if(this.jsondataFound == "")
        this.error = "Not Found"

  }

}
