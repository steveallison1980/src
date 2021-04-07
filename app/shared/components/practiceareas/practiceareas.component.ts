import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PROFESSIONALS_DATA } from './../../../../assets/data/staticdata'
import { LanguagesettingService } from '../../../services/languagesetting.service';

@Component({
  selector: 'app-practiceareas',
  templateUrl: './practiceareas.component.html',
  styleUrls: ['./practiceareas.component.css']
})
export class PracticeareasComponent implements OnInit {

  @Output() groupClick = new EventEmitter<string>();

  constructor(private langService: LanguagesettingService) { }

  ngOnInit(): void {
  }

  getGroupIcon(group) {
    for (let i in PROFESSIONALS_DATA) {
      if (PROFESSIONALS_DATA[i].component == group) {
        return PROFESSIONALS_DATA[i].icon;
      }
    }
  }
  getGroupText(group) {
    for (let i in PROFESSIONALS_DATA) {
      if (PROFESSIONALS_DATA[i].component == group) {
        if( this.langService.lang == "EN" ){
          return PROFESSIONALS_DATA[i].text;
        } else {
          return PROFESSIONALS_DATA[i].textJP;
        }
      }
    }
  }

  groupView(group){
    window.scroll(0, 0);
    this.groupClick.emit(group)
  }

}
