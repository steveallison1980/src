import { Component, HostListener, Inject, OnInit } from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  public bShowGotoTop: boolean = false;
  public isIE = /msie\s|trident\//i.test(window.navigator.userAgent)

  constructor(@Inject(DOCUMENT) private document: Document,
      public router: Router) {}

  @HostListener('window:scroll') onScroll(e: Event): void {
    if( this.document.documentElement.scrollTop > 320 ){
      this.bShowGotoTop = true;
    } else {
      this.bShowGotoTop = false;
    }
  }
  
  ngOnInit(): void {
  }
}
