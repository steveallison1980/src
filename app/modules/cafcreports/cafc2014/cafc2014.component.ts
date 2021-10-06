import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cafc2014',
  templateUrl: './cafc2014.component.html',
  styleUrls: ['./cafc2014.component.css']
})
export class Cafc2014Component implements OnInit {


  constructor(private titleService: Title) { }

  getTitle(){
    return "２０１４　CAFC判決";
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.getTitle());
  }

}
