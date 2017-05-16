import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'my-app',
  template: `
              <h1>Method Get</h1>
              <div id="container">
                  <router-outlet></router-outlet>
              </div>
              `
})
export class AppComponent {

  public constructor(private http:Http) {
    this.http.get('https://jsonplaceholder.typicode.com/posts').toPromise()
    .then(data=>{
      console.log(data);
      document.getElementById('container').innerHTML=JSON.stringify(data.json());
    }
    )
    .catch(err=>console.log(err));
  }

}
