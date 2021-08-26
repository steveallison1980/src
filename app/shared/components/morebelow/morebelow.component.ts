import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-morebelow',
  templateUrl: './morebelow.component.html',
  styleUrls: ['./morebelow.component.css']
})
export class MorebelowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  goToTop() {
    window.scroll(0, 100000);
  }
}
