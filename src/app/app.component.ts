import { Component } from '@angular/core';
import { FirebaseApp } from '@angular/fire';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 6';
firstnames;
userData;
  constructor(public app: FirebaseApp,
  private afDb: AngularFireDatabase) {
    this.afDb.list('firstnames')
    .valueChanges()
    .subscribe(
      data => this.firstnames = data
    );

this.afDb.list('users/qK5jLi6UtqXKqkMiq9agJ0w6u4o1')
.valueChanges()
  .subscribe(
      data => this.userData = data
    );
  }
}
