import { Component } from '@angular/core';

@Component({
  selector: 'admin',
  template: `<h1>Admin {{name}}</h1>`,
})
export class AdminComponent  { 
    name = 'component'; 

}
