import { Component, OnInit } from '@angular/core';
import { LanguagesettingService } from '../../../services/languagesetting.service';
@Component({
  selector: 'app-setsumeikaipage',
  templateUrl: './setsumeikaipage.component.html',
  styleUrls: ['./setsumeikaipage.component.css']
})
export class SetsumeikaipageComponent implements OnInit {

  constructor(public langService: LanguagesettingService) { }

  ngOnInit(): void {
  }

}
