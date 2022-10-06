import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverName: string = '';
  serverCreationStatus: string = `server was not created`;
  serverCreated = false;
  servers: string[] = ['testServer', 'testServer 2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit(): void {}
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Server was created' + ` name is ${this.serverName}`;
  }
}
