import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-successalert',
  //templateUrl: './successalert.component.html',
  template:`
  <p>Success message</p>
  `,
  //styleUrls: ['./successalert.component.css']
  styles:[`
  p {
    color:green;
  }
  `],
})
export class SuccessalertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
