import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  template: `
              <h1>Observable</h1>
             <button (click)="onClick(this.counter)">Print time in console</button>
             `
})
export class AppComponent {

  public counter: Observable<number> = new Subject<number>();

  public constructor() {
    this.counter.subscribe(res => console.log(res));
  }

  public onClick(counter) {
    counter.next(new Date().getTime());
  }

}