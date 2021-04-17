import { Component, OnInit } from '@angular/core';
import { CONTACT_DATA, CONTACT_DATAJP} from '../../../../assets/data/staticcontact';
import { LanguagesettingService } from '../../../services/languagesetting.service';

@Component({
  selector: 'app-contactinfotable',
  templateUrl: './contactinfotable.component.html',
  styleUrls: ['./contactinfotable.component.css']
})
export class ContactinfotableComponent implements OnInit {

  constructor(private langService: LanguagesettingService) {}

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['date', 'details'];

  getDatasource(){
    if( this.langService.lang == "EN" ){
      return CONTACT_DATA;
    } else {
      return CONTACT_DATAJP;
    }
  }

}
