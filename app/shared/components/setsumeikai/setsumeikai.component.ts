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
      text: "期待する人材像",
      bDarken: false
    }
    return ret;
  }
}
