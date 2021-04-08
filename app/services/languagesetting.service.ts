import { Injectable } from '@angular/core';

//how to use a service to share info (the lang setting across classes):
//https://stackoverflow.com/questions/59123292/toggle-a-class-by-a-button-from-header-component-that-affect-main-app-component
//https://angular.io/tutorial/toh-pt4

@Injectable({
  providedIn: 'root'
})
export class LanguagesettingService {

  public lang: string = "EN";

  constructor() { }

  public toggle(): void {
    if( this.lang == "EN" ){
      this.lang = "JP";
    } else {
      this.lang = "EN";
    }
  }
}