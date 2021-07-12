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
    return this.table.rows;
  }
  
  getDisplayedColumns(){
    return this.table.cols;
  }

  hasCol1(){
    return (this.table.cols.length > 0);
  }
  hasCol2(){
    return (this.table.cols.length > 1);
  }
  hasCol3(){
    return (this.table.cols.length > 2);
  }
  hasCol4(){
    return (this.table.cols.length > 3);
  }
  hasCol5(){
    return (this.table.cols.length > 4);
  }
  hasCol6(){
    return (this.table.cols.length > 5);
  }
  hasCol7(){
    return (this.table.cols.length > 6);
  }
  hasCol8(){
    return (this.table.cols.length > 7);
  }
  hasCol9(){
    return (this.table.cols.length > 8);
  }
  hasCol10(){
    return (this.table.cols.length > 9);
  }
}
