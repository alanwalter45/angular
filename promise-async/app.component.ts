import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'my-app',
  template: `
              <h1>Promise</h1>
              <div id="contenedor">
                {{solution | async}}
              </div>
              `
})
export class AppComponent {

  public name: string = 'Lucas Mateo';

  public solution: Promise<string[]> = null;

  public constructor() {
    this.solution = new Promise<string[]>((resolve, reject) => {
      resolve(['cadena1', `hello ${this.name}`]);
      reject('Error');
    });
  }

}