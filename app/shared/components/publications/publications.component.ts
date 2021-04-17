import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //todo
 /*publications: Array<IPublication> = PUBLICATIONS_DATA;
  
  clickDetails(p: IPublication) {
    console.log(p.name)
   this.nav.curPublication = p;
    this.nav.view = "publication";
    window.scroll(0, 0);
  }

  getPublications() {
    //todo
    return null;
  }*/
}
