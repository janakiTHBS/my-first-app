import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector:'[app-servers]',
   //selector:'.app-servers',
  templateUrl: './servers.component.html',
  //template:'<app-server></app-server><app-server></app-server>',
  //template:`
  //<app-server></app-server>
  //<app-server></app-server>
  //`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverCreationStatus="No server was created";
  allowNewServer=false;
  serverName='';
  username='';
  servercreated=false;
  servers=['Test Server','Dev Server','Production Server'];
  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000);

   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.servercreated=true;
    this.servers.push(this.serverName);
this.serverCreationStatus="server was created with name :"+this.serverName;    
  }
  onUpdateServerName(event:any){
    this.serverName=(<HTMLInputElement>event.target).value;
console.log(event.target.value);
  }


}
