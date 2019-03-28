import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

const config = {
   apiKey: "AIzaSyARSTvFHUyFxvuPFp0y0ctJlHWKPL1siWU",
    authDomain: "firstnames-bb5e9.firebaseapp.com",
    databaseURL: "https://firstnames-bb5e9.firebaseio.com",
    projectId: "firstnames-bb5e9",
    storageBucket: "firstnames-bb5e9.appspot.com",
    messagingSenderId: "22805729009"
};

@NgModule({
  imports:      [ 
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
