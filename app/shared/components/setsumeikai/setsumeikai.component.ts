import { Component, OnInit } from '@angular/core';
import { ITitle } from './../../../interfaces/icontent';

@Component({
  selector: 'app-setsumeikai',
  templateUrl: './setsumeikai.component.html',
  styleUrls: ['./setsumeikai.component.css']
})
export class SetsumeikaiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getTitle(){
    var ret: ITitle = {
      class: "largetext",
      text: "事務所の説明会"
    }
    return ret;
  }
}
