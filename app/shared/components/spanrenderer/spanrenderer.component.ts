import { Component, OnInit, Input } from '@angular/core';
import { ISpan } from './../../../interfaces/icontent';

@Component({
  selector: 'app-spanrenderer',
  templateUrl: './spanrenderer.component.html',
  styleUrls: ['./spanrenderer.component.css']
})
export class SpanrendererComponent implements OnInit {

  constructor() { }

  @Input() span: ISpan;
  @Input() bTreeMode: boolean;
  @Input() treeLevel: number;

  ngOnInit(): void {
  }

  getText(){
    return this.span.text;
  }
  getUrl(){
    return this.span.url;
  }
  isLink(){
    return (this.span.url != null && this.span.url.length > 0);
  }
  getTooltip(){
    var ret = "";
    if( this.span.tooltip != null ) ret = this.span.tooltip;
    return ret;
  }
  getRouterLink(){
    return this.span.routerlink;
  }
  isRouterLink(){
    return (this.span.routerlink != null && this.span.routerlink.length > 0);
  }
  isNotLink(){
    return (!this.isLink() && !this.isRouterLink());
  }
  getClasses(){
    var ret = "";
    if (this.span.classes == null) return "";
    for (var i=0; i<this.span.classes.length; i++){
      ret += this.span.classes[i] + " ";
    }
    return ret;
  }
  getTreeMode(){
    if(this.bTreeMode === undefined) this.bTreeMode=false;
    return this.bTreeMode;
  }
  getTreeLevel(){
    if(this.treeLevel === undefined) this.treeLevel=0;
    return this.treeLevel;
  }
}
