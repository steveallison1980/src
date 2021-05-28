import { Component, OnInit } from '@angular/core';
import { LanguagesettingService } from '../../../services/languagesetting.service';
@Component({
  selector: 'app-workenvironment',
  templateUrl: './workenvironment.component.html',
  styleUrls: ['./workenvironment.component.css']
})
export class WorkenvironmentComponent implements OnInit {

  constructor(public langService: LanguagesettingService) { }

  ngOnInit(): void {
  }

}
