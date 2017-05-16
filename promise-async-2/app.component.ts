import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
              <h1>Products</h1>
              <div id="contenedor"></div>
              `
})
export class AppComponent {

  public solution :Promise<string[]>=null;

  public constructor() {
    this.solution=new Promise<string[]>((resolve,reject)=>{
      resolve(['Café','Azucar','Silpancho','Galleta','Caramelo']);
      reject('Fracaso');
    });

    this.solution.then((value)=>{document.getElementById('contenedor').innerHTML= value.toString()}).catch((err)=>{throw err});
  }

}