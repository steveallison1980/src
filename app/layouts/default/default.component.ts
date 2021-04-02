import { Component, HostListener, Inject, OnInit } from '@angular/core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  public bHeaderFixed: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  @HostListener('window:scroll') onScroll(e: Event): void {
    if( this.document.documentElement.scrollTop > 120 ){
      this.bHeaderFixed = true;
    } else {
      this.bHeaderFixed = false;
    }
  }
  
  ngOnInit(): void {
  }

}
