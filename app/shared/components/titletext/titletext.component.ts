import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-titletext',
  templateUrl: './titletext.component.html',
  styleUrls: ['./titletext.component.css']
})
export class TitletextComponent implements OnInit {

  @Input() title: string;
  @Input() title2: string;

  constructor() { }

  ngOnInit(): void {
  }

  getTitleText (){
    return this.title;
  }
  getTitleText2 (){
    return this.title2;
  }
}
