import { Component, OnInit, Input } from '@angular/core';
import { IList } from './../../../interfaces/icontent';

@Component({
  selector: 'app-listrenderer',
  templateUrl: './listrenderer.component.html',
  styleUrls: ['./listrenderer.component.css']
})
export class ListrendererComponent implements OnInit {

  constructor() { }

  @Input() list: IList;

  ngOnInit(): void {
  }
  getType(){
    return this.list.type;
  }
  getElements(){
    return this.list.elements;
  }
}
