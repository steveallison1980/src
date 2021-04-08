import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    BrowserAnimationsModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestoreModule
  ],
  providers: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }