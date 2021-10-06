import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cafc2019',
  templateUrl: './cafc2019.component.html',
  styleUrls: ['./cafc2019.component.css']
})
export class Cafc2019Component implements OnInit {

  constructor(private titleService: Title) { }

  getTitle(){
    return "２０１９　CAFC判決";
  }

  ngOnInit(): void {
    this.titleService.setTitle(this.getTitle());
  }
}
