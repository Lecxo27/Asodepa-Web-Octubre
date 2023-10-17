import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck{
  title = 'Asodepa';
  ismenurequired=false;
  constructor(private _router:Router){

  }//De no utilizar esto, eliminarlo 
  ngDoCheck(): void {
    let currenturl=this._router.url;
    if(currenturl=='/login' || currenturl=='/registro'){
      this.ismenurequired=false;
    }else{
      this.ismenurequired=true;
    }
  }
}
