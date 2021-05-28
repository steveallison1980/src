import { Component, OnInit } from '@angular/core';
import { LanguagesettingService } from '../../../services/languagesetting.service';

@Component({
  selector: 'app-careerspage',
  templateUrl: './careerspage.component.html',
  styleUrls: ['./careerspage.component.css']
})
export class CareerspageComponent implements OnInit {

  constructor(public langService: LanguagesettingService) { }

  ngOnInit(): void {
  }

}
