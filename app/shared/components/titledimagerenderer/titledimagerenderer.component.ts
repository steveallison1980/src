import { Component, OnInit, Input } from '@angular/core';
import { IImage, ISpan } from '../../../interfaces/icontent';

@Component({
  selector: 'app-titledimagerenderer',
  templateUrl: './titledimagerenderer.component.html',
  styleUrls: ['./titledimagerenderer.component.css']
})
export class TitledimagerendererComponent implements OnInit {

  @Input() img: IImage;
  @Input() span: ISpan;

  constructor() { }

  getSpan(){
    return this.span;
  }
  getImage(){
    return this.img;
  }

  ngOnInit(): void {
  }
}
