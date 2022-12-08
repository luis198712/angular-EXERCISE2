import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  inputData1 = [];
  inputData2 = ['a', 'b', 'c'];
  inputData3 = ['a', 'b', 'c',  'd', 'e', 'f'];
}
