import { Component, OnInit, Input } from '@angular/core';
import { ITitledImage } from '../../../interfaces/icontent';

@Component({
  selector: 'app-titledimagerenderer',
  templateUrl: './titledimagerenderer.component.html',
  styleUrls: ['./titledimagerenderer.component.css']
})
export class TitledimagerendererComponent implements OnInit {

  @Input() titledimage: ITitledImage;
  @Input() bTreeMode: boolean;
  @Input() treeLevel: number;

  constructor() { }

  getTitle(){
    return this.titledimage.title;
  }
  getImage(){
    return this.titledimage.img;
  }
  ngOnInit(): void {
  }
  getTreeMode(){
    return this.bTreeMode;
  }
  getTreeLevel(){
    if(this.treeLevel === undefined) this.treeLevel=0;
    return this.treeLevel;
  }
}
