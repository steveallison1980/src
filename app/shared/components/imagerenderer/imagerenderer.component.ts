import { Component, OnInit, Input } from '@angular/core';
import { IImage } from './../../../interfaces/icontent';

@Component({
  selector: 'app-imagerenderer',
  templateUrl: './imagerenderer.component.html',
  styleUrls: ['./imagerenderer.component.css']
})
export class ImagerendererComponent implements OnInit {

  @Input() img: IImage;
  @Input() bTreeMode: boolean;
  @Input() treeLevel: number;

  IMGFOLDER: string = "./../../../../assets/img/";

  constructor() { }

  ngOnInit(): void {
  }

  getImgSrc(){
    return this.IMGFOLDER + this.img.folder + "/" + this.img.filename;
  }
  getClasses(){
    var ret = "";
    if (this.img.classes == null) return "";
    for (var i=0; i<this.img.classes.length; i++){
      ret += this.img.classes[i] + " ";
    }
    return ret;
  }
  getTreeMode(){
    return this.bTreeMode;
  }
  getTreeLevel(){
    if(this.treeLevel === undefined) this.treeLevel=0;
    return this.treeLevel;
  }
}
