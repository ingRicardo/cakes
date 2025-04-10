import { Component } from '@angular/core';

@Component({
  selector: 'app-videogames',
  templateUrl: './videogames.component.html',
  styleUrls: ['./videogames.component.css']
})
export class VideogamesComponent {


  showFiller = false;
  originsflag: boolean = false;
  homeflag: boolean = false;

  ngOnInit(): void {
    //alert("Videogames Component Initialized");  

    this.originsflag = false;
    this.homeflag = true;

  }
  orignins(){
    
    this.originsflag = true;
    this.homeflag = false;
  }

  home(){
    this.originsflag = false;
    this.homeflag = true;
  }

}
