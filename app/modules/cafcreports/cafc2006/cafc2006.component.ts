import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cafc2006',
  templateUrl: './cafc2006.component.html',
  styleUrls: ['./cafc2006.component.css']
})
export class Cafc2006Component implements OnInit {

  constructor(private titleService: Title) { }

  getTitle(){
    return "２００６年　CAFC判決";
  }


  ngOnInit(): void {
    this.titleService.setTitle(this.getTitle());
  }
}
