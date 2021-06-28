import { Component, OnInit, Input } from '@angular/core';
import { ITable } from './../../../interfaces/icontent';

@Component({
  selector: 'app-tablerenderer',
  templateUrl: './tablerenderer.component.html',
  styleUrls: ['./tablerenderer.component.css']
})
export class TablerendererComponent implements OnInit {

  @Input() table: ITable;

  constructor() { }

  ngOnInit(): void {
  }

  getDatasource(){
    return null;
  }
  getCols(){
    return null;
  }
}
