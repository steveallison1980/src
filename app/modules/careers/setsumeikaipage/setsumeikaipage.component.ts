import { Component, OnInit } from '@angular/core';
import { LanguagesettingService } from '../../../services/languagesetting.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-setsumeikaipage',
  templateUrl: './setsumeikaipage.component.html',
  styleUrls: ['./setsumeikaipage.component.css']
})
export class SetsumeikaipageComponent implements OnInit {

  constructor(
    public langService: LanguagesettingService,
    private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.getTitle());
  }

  getTitle(){
    return "期待する人材像";
  }  

}
