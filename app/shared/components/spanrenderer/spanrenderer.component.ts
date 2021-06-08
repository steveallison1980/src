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
    return this.span.tooltip;
  }
  getRouterLink(){
    return this.span.routerlink;
  }
  isRouterLink(){
    return (this.span.routerlink != null && this.span.routerlink.length > 0);
  }
  isNotLink(){
    console.log(this.isLink())
    console.log(this.isRouterLink())
    console.log((!this.isLink() && !this.isRouterLink()));
    return (!this.isLink() && !this.isRouterLink());
  }
  getClasses(){
    var ret = "";
    for (var i=0; i<this.span.classes.length; i++){
      ret += this.span.classes[i] + " ";
    }
    return ret;
  }
}
