import { Component, OnInit } from '@angular/core';
import { LanguagesettingService } from '../../../services/languagesetting.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-boshuyokopage',
  templateUrl: './boshuyokopage.component.html',
  styleUrls: ['./boshuyokopage.component.css']
})
export class BoshuyokopageComponent implements OnInit {

  constructor(
    public langService: LanguagesettingService,
    private titleService: Title) { }

  ngOnInit(): void {
    this.titleService.setTitle(this.getTitle());
  }

  getTitle(){
    return "募集要項";
  }  
}
