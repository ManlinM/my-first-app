import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';

  fontColor ='blue';
  sayHelloId=1;
  canClick=false;
  message ='Hello, world';

  sayMessage(){alert(this.message);}
}
