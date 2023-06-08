import { Component } from '@angular/core';
/**
 * Creating a component to learn how to use *ngIf
 * when there is an else condition
 * its typically used with ng-template to state the else condition
 */
@Component({
  selector: 'app-hello-world-ngif',
  templateUrl: './hello-world-ngif.component.html',
  styleUrls: ['./hello-world-ngif.component.css']
})
export class HelloWorldNgifComponent {
  message ="I am read only!!";
  canEdit = false;

  //function for button to display differen message
  onEditClick(){
    //when click, negate canEdit
    this.canEdit=!this.canEdit;
    if(this.canEdit){
      this.message="You can edit me!";
    }else{
      this.message="I am read only!";
    }
  }
}
