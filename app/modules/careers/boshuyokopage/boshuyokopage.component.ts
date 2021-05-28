import { Component, OnInit } from '@angular/core';
import { LanguagesettingService } from '../../../services/languagesetting.service';

@Component({
  selector: 'app-boshuyokopage',
  templateUrl: './boshuyokopage.component.html',
  styleUrls: ['./boshuyokopage.component.css']
})
export class BoshuyokopageComponent implements OnInit {

  constructor(public langService: LanguagesettingService) { }

  ngOnInit(): void {
  }

}
