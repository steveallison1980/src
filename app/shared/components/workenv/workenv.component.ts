import { Component, OnInit } from '@angular/core';
import { ITitle } from './../../../interfaces/icontent';

@Component({
  selector: 'app-workenv',
  templateUrl: './workenv.component.html',
  styleUrls: ['./workenv.component.css']
})
export class WorkenvComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getTitle(){
    var ret: ITitle = {
      class: "largetext",
      text: '事務所の仕事環境'
    }
    return ret;
  }
}
