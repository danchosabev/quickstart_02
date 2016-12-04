import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent }  from './admin.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    AdminRoutingModule 
  ],
  declarations: [ AdminComponent ],
  exports: [AdminComponent]
})

export class AdminModule { }
