import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warningalert',
  //templateUrl: './warningalert.component.html',
  template:`
  <p>Warning message</p>`,
  //styleUrls: ['./warningalert.component.css']
  styles:[`
  p{
color:yellow;
  }`]
})
export class WarningalertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
