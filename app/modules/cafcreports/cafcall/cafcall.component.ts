import { Component, OnInit } from '@angular/core';
import { MetadescService } from '../../../services/metadesc.service';
import { Meta } from '@angular/platform-browser';
import { CAFCALLPAGEKEY } from './../../../../assets/data/staticnav';

@Component({
  selector: 'app-cafcall',
  templateUrl: './cafcall.component.html',
  styleUrls: ['./cafcall.component.css']
})
export class CafcallComponent implements OnInit {

  constructor(
    private metasvc:Meta,
    private metaDescsvc: MetadescService
  ) { }

  ngOnInit(): void {
    this.metasvc.updateTag( 
      { 
        name:'description',
        content: this.metaDescsvc.getContent(CAFCALLPAGEKEY,"JP")
      },
      "name='description'"
    );
  }

}
