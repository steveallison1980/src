import { Injectable } from '@angular/core';

//how to use a service to share info (the lang setting across classes):
//https://stackoverflow.com/questions/59123292/toggle-a-class-by-a-button-from-header-component-that-affect-main-app-component
//https://angular.io/tutorial/toh-pt4

@Injectable({
  providedIn: 'root'
})
export class LanguagesettingService {

  public lang: string = "JP";

  constructor() { }

  public toggle(): void {
    console.log(this.lang)
    if( this.lang == "EN" ){
      this.lang = "JP";
    } else {
      this.lang = "EN";
    }
  }
  public setLang(val:string): void {
    if( val == "JP" ){
      this.lang = "JP";
    } 
    if( val == "EN" ){
      this.lang = "EN";
    }
  }
  public getToolTip(){
    if( this.lang == "JP" ){
      return "click to switch to English!";
    } else {
      return "日本語に切り替え";
    }
  }
  //from assets!
  public getImgSrc(){
    if( this.lang == "JP" ){
      return "img/en.png";
    } else {
      return "img/jp.png";
    }
  }
}
