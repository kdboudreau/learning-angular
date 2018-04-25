import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId = 10;
  serverStatus: string = 'offline'; //typescript you can assign var type

  getServerStatus() {
    return this.serverStatus
  }
}
