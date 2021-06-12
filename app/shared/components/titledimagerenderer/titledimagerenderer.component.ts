import { Component, OnInit, Input } from '@angular/core';
import { ITitledImage } from '../../../interfaces/icontent';

@Component({
  selector: 'app-titledimagerenderer',
  templateUrl: './titledimagerenderer.component.html',
  styleUrls: ['./titledimagerenderer.component.css']
})
export class TitledimagerendererComponent implements OnInit {

  @Input() titledimage: ITitledImage;

  constructor() { }

  getTitle(){
    return this.titledimage.title;
  }
  getImage(){
    return this.titledimage.img;
  }

  ngOnInit(): void {
  }
}
