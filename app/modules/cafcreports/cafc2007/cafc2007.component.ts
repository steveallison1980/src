import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cafc2007',
  templateUrl: './cafc2007.component.html',
  styleUrls: ['./cafc2007.component.css']
})
export class Cafc2007Component implements OnInit {


  constructor(private titleService: Title) { }

  getTitle(){
    return "２００７年　CAFC判決";
  }


  ngOnInit(): void {
    this.titleService.setTitle(this.getTitle());
  }

}
