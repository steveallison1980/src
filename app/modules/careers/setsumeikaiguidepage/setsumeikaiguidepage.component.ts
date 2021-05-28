import { Component, OnInit } from '@angular/core';
import { LanguagesettingService } from '../../../services/languagesetting.service';

@Component({
  selector: 'app-setsumeikaiguidepage',
  templateUrl: './setsumeikaiguidepage.component.html',
  styleUrls: ['./setsumeikaiguidepage.component.css']
})
export class SetsumeikaiguidepageComponent implements OnInit {

  constructor(public langService: LanguagesettingService) { }

  ngOnInit(): void {
  }

}
