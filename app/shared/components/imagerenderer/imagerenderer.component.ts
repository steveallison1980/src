import { Component, OnInit, Input } from '@angular/core';
import { IImage } from './../../../interfaces/icontent';

@Component({
  selector: 'app-imagerenderer',
  templateUrl: './imagerenderer.component.html',
  styleUrls: ['./imagerenderer.component.css']
})
export class ImagerendererComponent implements OnInit {

  @Input() img: IImage;
  IMGFOLDER: string = "./../../../../assets/img/";

  constructor() { }

  ngOnInit(): void {
  }

  getImgSrc(){
    console.log(this.IMGFOLDER + this.img.folder + "/" + this.img.filename)
    return this.IMGFOLDER + this.img.folder + "/" + this.img.filename;
  }

}
