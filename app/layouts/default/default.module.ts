import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultComponent } from './default.component';

import { WelcomepageComponent } from '../../modules/welcomepage/welcomepage.component';
import { NewspageComponent } from '../../modules/newspage/newspage.component';
import { ContactpageComponent } from '../../modules/contactpage/contactpage.component';
import { PublicationspageComponent } from '../../modules/publicationspage/publicationspage.component';
import { PublicationpageComponent } from '../../modules/publicationpage/publicationpage.component';

import { AboutusComponent } from '../../modules/aboutus/aboutus.component';
import { AboutpageComponent } from '../../modules/aboutpage/aboutpage.component';
import { OverviewpageComponent } from '../../modules/overviewpage/overviewpage.component';
import { KeyfeaturespageComponent } from '../../modules/keyfeaturespage/keyfeaturespage.component';
import { AboutcontactpageComponent } from '../../modules/aboutcontactpage/aboutcontactpage.component';

import { OurservicesComponent } from '../../modules/ourservices/ourservices.component';
import { PatentspageComponent } from '../../modules/patentspage/patentspage.component';
import { DesignstmpageComponent } from '../../modules/designstmpage/designstmpage.component';
import { LitigationpageComponent } from '../../modules/litigationpage/litigationpage.component';
import { CasestudiespageComponent } from '../../modules/casestudiespage/casestudiespage.component';

import { ProfessionalsComponent } from '../../modules/professionals/professionals.component';
import { ProfessionalComponent } from '../../modules/professional/professional.component';
import { ProPracticeareasComponent } from '../../modules/professionals/pro-practiceareas/pro-practiceareas.component';
import { ProInfoprocComponent } from '../../modules/professionals/pro-infoproc/pro-infoproc.component';
import { ProCommComponent } from '../../modules/professionals/pro-comm/pro-comm.component';
import { ProElecComponent } from '../../modules/professionals/pro-elec/pro-elec.component';
import { ProMechComponent } from '../../modules/professionals/pro-mech/pro-mech.component';
import { ProDesignsComponent } from '../../modules/professionals/pro-designs/pro-designs.component';
import { ProMeddevicesComponent } from '../../modules/professionals/pro-meddevices/pro-meddevices.component';
import { ProChempharmabioComponent } from '../../modules/professionals/pro-chempharmabio/pro-chempharmabio.component';
import { ProToysgamesComponent } from '../../modules/professionals/pro-toysgames/pro-toysgames.component';
import { ProLitComponent } from '../../modules/professionals/pro-lit/pro-lit.component';
import { ProPatattorneysComponent } from '../../modules/professionals/pro-patattorneys/pro-patattorneys.component';
import { ProAdvisorsComponent } from '../../modules/professionals/pro-advisors/pro-advisors.component';
import { ProPatengineersComponent } from '../../modules/professionals/pro-patengineers/pro-patengineers.component';
import { ProInternationalComponent } from '../../modules/professionals/pro-international/pro-international.component';

import { CafcreportComponent } from '../../modules/cafcreport/cafcreport.component';
import { CafcallComponent } from '../../modules/cafcreports/cafcall/cafcall.component';
import { Cafc2019Component } from '../../modules/cafcreports/cafc2019/cafc2019.component';
import { Cafc2018Component } from '../../modules/cafcreports/cafc2018/cafc2018.component';
import { Cafc2017Component } from '../../modules/cafcreports/cafc2017/cafc2017.component';
import { Cafc2016Component } from '../../modules/cafcreports/cafc2016/cafc2016.component';
import { Cafc2015Component } from '../../modules/cafcreports/cafc2015/cafc2015.component';
import { Cafc2014Component } from '../../modules/cafcreports/cafc2014/cafc2014.component';
import { Cafc2013Component } from '../../modules/cafcreports/cafc2013/cafc2013.component';
import { Cafc2012Component } from '../../modules/cafcreports/cafc2012/cafc2012.component';
import { Cafc2011Component } from '../../modules/cafcreports/cafc2011/cafc2011.component';
import { Cafc2010Component } from '../../modules/cafcreports/cafc2010/cafc2010.component';
import { Cafc2009Component } from '../../modules/cafcreports/cafc2009/cafc2009.component';
import { Cafc2008Component } from '../../modules/cafcreports/cafc2008/cafc2008.component';
import { Cafc2007Component } from '../../modules/cafcreports/cafc2007/cafc2007.component';
import { Cafc2006Component } from '../../modules/cafcreports/cafc2006/cafc2006.component';
import { Cafc2005Component } from '../../modules/cafcreports/cafc2005/cafc2005.component';

import { CareerspageComponent } from '../../modules/careers/careerspage/careerspage.component';
import { SetsumeikaipageComponent } from '../../modules/careers/setsumeikaipage/setsumeikaipage.component';
import { SetsumeikaiguidepageComponent } from '../../modules/careers/setsumeikaiguidepage/setsumeikaiguidepage.component';
import { BoshuyokopageComponent } from '../../modules/careers/boshuyokopage/boshuyokopage.component';
import { WorkenvironmentComponent } from '../../modules/careers/workenvironment/workenvironment.component';

import { SharedModule } from '../../shared/shared.module';

import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    DefaultComponent,

    WelcomepageComponent,
    NewspageComponent,
    ContactpageComponent,
    PublicationspageComponent,
    PublicationpageComponent,

    AboutusComponent,
    AboutpageComponent,
    OverviewpageComponent,
    KeyfeaturespageComponent,
    AboutcontactpageComponent,

    OurservicesComponent,
    PatentspageComponent,
    DesignstmpageComponent,
    LitigationpageComponent,
    CasestudiespageComponent,

    ProfessionalsComponent,
    ProfessionalComponent,
    ProPracticeareasComponent,
    ProInfoprocComponent,
    ProCommComponent,
    ProElecComponent,
    ProMechComponent,
    ProDesignsComponent,
    ProMeddevicesComponent,
    ProChempharmabioComponent,
    ProToysgamesComponent,
    ProLitComponent,
    ProPatattorneysComponent,
    ProAdvisorsComponent,
    ProPatengineersComponent,
    ProInternationalComponent,

    CafcreportComponent,
    CafcallComponent,
    Cafc2019Component,
    Cafc2018Component,
    Cafc2017Component,
    Cafc2016Component,
    Cafc2015Component,
    Cafc2014Component,
    Cafc2013Component,
    Cafc2012Component,
    Cafc2011Component,
    Cafc2010Component,
    Cafc2009Component,
    Cafc2008Component,
    Cafc2007Component,
    Cafc2006Component,
    Cafc2005Component,

    CareerspageComponent,
    SetsumeikaipageComponent,
    SetsumeikaiguidepageComponent,
    BoshuyokopageComponent,
    WorkenvironmentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class DefaultModule { }
