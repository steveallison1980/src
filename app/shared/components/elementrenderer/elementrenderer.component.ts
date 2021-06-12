import { Component, OnInit, Input } from '@angular/core';
import { IElement } from './../../../interfaces/icontent';

@Component({
  selector: 'app-elementrenderer',
  templateUrl: './elementrenderer.component.html',
  styleUrls: ['./elementrenderer.component.css']
})
export class ElementrendererComponent implements OnInit {

  constructor() { }

  @Input() element: IElement;

  ngOnInit(): void {
  }

  getType(){
    return this.element.type;
  }
  getObj(){
    return this.element.objs[0];
  }
}
