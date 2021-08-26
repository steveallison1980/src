import { Component, OnInit } from '@angular/core';
import { LanguagesettingService } from '../../../services/languagesetting.service';

@Component({
  selector: 'app-homecards',
  templateUrl: './homecards.component.html',
  styleUrls: ['./homecards.component.css']
})
export class HomecardsComponent implements OnInit {

  constructor(
    private langsvc: LanguagesettingService) {
  }
  getLang(){
    return this.langsvc.lang;
  }

  ngOnInit(): void {
  }
}
