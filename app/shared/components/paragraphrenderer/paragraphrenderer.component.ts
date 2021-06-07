import { Component, OnInit, Input } from '@angular/core';
import { IParagraph } from './../../../interfaces/icontent';

@Component({
  selector: 'app-paragraphrenderer',
  templateUrl: './paragraphrenderer.component.html',
  styleUrls: ['./paragraphrenderer.component.css']
})
export class ParagraphrendererComponent implements OnInit {

  @Input() paragraph: IParagraph;

  constructor() { }

  ngOnInit(): void {
  }

  getSpans(){
    return this.paragraph.spans;
  }
}
