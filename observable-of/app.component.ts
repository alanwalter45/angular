import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
@Component({
  selector: 'my-app',
  template: `
              <h1>Products</h1>
              <ul *ngFor="let item of items | async">
                <li>{{item}}</li>
              </ul>
              `
})
export class AppComponent {

  public items=Observable.of(['Café','Azucar','Toddy','Coca-Cola']);

  public constructor() {
    console.log('iniciando aqui...');
  }

}