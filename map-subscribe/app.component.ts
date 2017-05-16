import { Component } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  template: `
              <h1>List Posts</h1>
              <div id="contenedor">
                <ul *ngFor="let item of results ">
                  <li><a href="">{{item.title}}</a></li>
                </ul>
              </div>
              `
})
export class AppComponent {

  public results = [];

  public constructor(private http: Http) {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
      .map((observer) => observer)
      .subscribe(res => this.results = res.json());
  }

}