import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
  <ul>
      <li><a [routerLink]="['']">Home</a></li>
      <li><a [routerLink]="['/admin']">Admin</a></li>
      <li><a [routerLink]="['/alabala']">Alabala</a></li>    
    </ul>
    <router-outlet></router-outlet>
    `,
})


export class AppComponent  { name = 'Angular'; }
