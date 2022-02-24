import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';


@Injectable()
export class SocketWebService  {
  socket: any;
  server = 'http://localhost:3000';
  constructor() {
    this.socket = io(this.server);
  }

  listen(eventName: string) {
    return new Observable((Subscriber) => {
      this.socket.on(eventName, (data: any) => {
        Subscriber.next(data);
      })
    });
  }

  emitEvent(eventName: string, payload = {}) {
    this.socket.emit(eventName, payload);
  }
}
