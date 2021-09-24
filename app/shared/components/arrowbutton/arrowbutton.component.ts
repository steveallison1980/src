import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-arrowbutton',
  templateUrl: './arrowbutton.component.html',
  styleUrls: ['./arrowbutton.component.css']
})
export class ArrowbuttonComponent implements OnInit {

  @Input() bHover:boolean;

  constructor() { }

  ngOnInit(): void {
  }

  getIconClass(){
    if( this.bHover ){
      return "hoveringicon";
    }
    return "nonhoveringicon";
  }
}
