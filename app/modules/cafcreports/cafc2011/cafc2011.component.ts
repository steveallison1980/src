import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cafc2011',
  templateUrl: './cafc2011.component.html',
  styleUrls: ['./cafc2011.component.css']
})
export class Cafc2011Component implements OnInit {


  constructor(private titleService: Title) { }

  getTitle(){
    return "２０１１年　CAFC判決";
  }


  ngOnInit(): void {
    this.titleService.setTitle(this.getTitle());
  }

}
