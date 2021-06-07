import { Component, OnInit } from '@angular/core';
import { LanguagesettingService } from '../../../services/languagesetting.service';
import { OVERVIEWTITLE,OVERVIEWTITLEJP,OURSTORYTAB,OURSTORYTABJP,CONTACTINFOTAB,CONTACTINFOTABJP,OUTLINETAB,OUTLINETABJP,OURSTORYTEXT, OURSTORYTEXTJP, PATENTTEXT,PATENTTEXTJP,LITIGATIONTEXT,LITIGATIONTEXTJP,ANALYSISTEXT,ANALYSISTEXTJP,DESIGNTMTEXT,DESIGNTMTEXTJP} from "../../../../assets/data/staticoverview";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  constructor(public langService: LanguagesettingService) { }

  ngOnInit(): void {
  }
  getTitle(){
    if( this.langService.lang == "EN")
      return OVERVIEWTITLE;
    else
      return OVERVIEWTITLEJP;
  }
  getOurStoryTitle(){
    if( this.langService.lang == "EN")
      return OURSTORYTAB;
    else
      return OURSTORYTABJP;
  }
  getContactTitle(){
    if( this.langService.lang == "EN")
      return CONTACTINFOTAB;
    else
      return CONTACTINFOTABJP;
  }
  getOutlineTitle(){
    if( this.langService.lang == "EN")
      return OUTLINETAB;
    else
      return OUTLINETABJP;
  }
  getOurStoryText(){
    if( this.langService.lang == "EN")
      return OURSTORYTEXT;
    else
      return OURSTORYTEXTJP;
  }
  getPatentBlurb(){
    if( this.langService.lang == "EN")
      return PATENTTEXT;
    else
      return PATENTTEXTJP;
  }
  getLitBlurb(){
    if( this.langService.lang == "EN")
      return LITIGATIONTEXT;
    else
      return LITIGATIONTEXTJP;
  }
  getAnalysisBlurb(){
    if( this.langService.lang == "EN")
      return ANALYSISTEXT;
    else
      return ANALYSISTEXTJP;
  }
  getDesignTMBlurb(){
    if( this.langService.lang == "EN")
      return DESIGNTMTEXT;
    else 
      return DESIGNTMTEXTJP;
  }
}
