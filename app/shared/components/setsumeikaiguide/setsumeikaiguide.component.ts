import { Component, OnInit } from '@angular/core';
import { ITitle } from './../../../interfaces/icontent';

@Component({
  selector: 'app-setsumeikaiguide',
  templateUrl: './setsumeikaiguide.component.html',
  styleUrls: ['./setsumeikaiguide.component.css']
})
export class SetsumeikaiguideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getTitle(){
    var ret: ITitle = {
      class: "largetext",
      text: '事務所説明会のご案内'
    }
    return ret;
  }
}
