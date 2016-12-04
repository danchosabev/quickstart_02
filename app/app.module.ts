import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent }  from './app.component';
import { HomeComponent }  from './components/home.component';
import { PageNotFoundComponent }  from './components/page-not-found.component';
import { routing } from './app.routing';

@NgModule({
  imports:      [ 
    BrowserModule,
    AppRoutingModule 
  ],
  declarations: [ 
    AppComponent,
    PageNotFoundComponent,
    HomeComponent 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
