import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cafc2005',
  templateUrl: './cafc2005.component.html',
  styleUrls: ['./cafc2005.component.css']
})
export class Cafc2005Component implements OnInit {

  constructor(private titleService: Title) { }

  getTitle(){
    return "２００５年　CAFC判決";
  }


  ngOnInit(): void {
    this.titleService.setTitle(this.getTitle());
  }

}
