import { Component } from '@angular/core';
import { Observable, Subscriber } from 'rxjs/Rx';
@Component({
  selector: 'my-app',
  template: `
              <h1>Time</h1>
              <div id="contenedor">
                {{solution | async}}
              </div>
              `
})
export class AppComponent {

  public solution: Observable<string[]> = null;

  public constructor() {
    this.solution = new Observable<string[]>((observer: Subscriber<string[]>) => {
      setInterval(() => {
        observer.next([new Date().toTimeString()])
      }, 1000)
    });
  }

}
