import { Component, OnInit, Input } from '@angular/core';
import { ITable } from './../../../interfaces/icontent';

//https://material.angular.io/components/table/overview

@Component({
  selector: 'app-tablerenderer',
  templateUrl: './tablerenderer.component.html',
  styleUrls: ['./tablerenderer.component.css']
})
export class TablerendererComponent implements OnInit {

  @Input() table: ITable;
  @Input() bTreeMode: boolean;
  @Input() treeLevel: number;

  constructor() { }

  ngOnInit(): void {
  }

  getDatasource(){
    //return [{column1:"test",column2:"aaa",column3:"3",column4:"a"}]
    return this.table.rows;
  }

  getDisplayedColumns(){
    return ["column1",
            "column2",
            "column3",
            "column4",
            "column5",
            "column6",
            "column7",
            "column8",
            "column9",
            "column10"];
  }
  getCol(colnum:number){
    return this.table.cols[colnum-1];
  }

  getHiddenClass(idx){
    if(this.table.cols.length >= idx)
      return "show";
    else
      return "hide";
  }
  
  getHeaderClass(){
    var ret = "hide";
    this.table.cols.forEach(element => {
      if( element != "" ){
        ret = "";
      }
    })
    return ret;
  }


  getNoShadowClass(){
    /*for (var i=0; i<this.table.classes.length; i++){
      if( this.table.classes[i] == "noshadow" ) return "noshadow";
    }*/
    return "noshadow";
  }
  getNoUnderlineClass(){
    /*for (var i=0; i<this.table.classes.length; i++){
      if( this.table.classes[i] == "nounderline" ) return "nounderline";
    }*/
    return "";
  }

  getCol1(){
    console.log(this.table.rows);
    return this.table.rows;
    // return this.table.
  }
  getTreeMode(){
    return this.bTreeMode;
  }
  getTreeLevel(){
    if(this.treeLevel === undefined) this.treeLevel=0;
    return this.treeLevel;
  }
}
