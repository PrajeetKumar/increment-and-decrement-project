import { Component, VERSION } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  num=0
  incement()
  {
    this.num++;
  }
  decement()
  {
    this.num--;
  }
  
}
