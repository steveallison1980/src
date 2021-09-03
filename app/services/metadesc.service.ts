import { Injectable } from '@angular/core';
import { METADESC_LIST } from './../../assets/data/staticmetadesc';

@Injectable({
  providedIn: 'root'
})
export class MetadescService {

  constructor() { }

  getContent(page,lang): string {
    var ret = "";
    METADESC_LIST.forEach(metadesc => {
      if( metadesc.key == page ){
        switch(lang){
          case "JP":
            ret = metadesc.metaDescJP;
            return;
          case "EN":
          default:
            ret = metadesc.metaDescEN;
            return;
        }
      }
    });
    return ret;
  }

}
