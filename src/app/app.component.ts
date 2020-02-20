import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //selector:'[app-root]',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //styles:[`
    //h3 {
      //color:red;
    //}
  //`]
})
export class AppComponent {
  title = 'my-first-app';
  secret=false;
  log=[];

  onToggleDetails() {
    this.secret = !this.secret;
    //this.log.push(this.log.length+1);
    this.log.push(new Date());
  }

  getColor(){
    return 'blue';
  }
}
