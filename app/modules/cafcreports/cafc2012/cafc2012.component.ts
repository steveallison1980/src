import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cafc2012',
  templateUrl: './cafc2012.component.html',
  styleUrls: ['./cafc2012.component.css']
})
export class Cafc2012Component implements OnInit {


  constructor(private titleService: Title) { }

  getTitle(){
    return "２０１２年　CAFC判決";
  }


  ngOnInit(): void {
    this.titleService.setTitle(this.getTitle());
  }

}
