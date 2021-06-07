import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-titletext',
  templateUrl: './titletext.component.html',
  styleUrls: ['./titletext.component.css']
})
export class TitletextComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

  getTitleText (){
    return this.title;
  }
}
