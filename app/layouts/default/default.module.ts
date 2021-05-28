import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultComponent } from './default.component';
import { HomeComponent } from '../../modules/home/home.component';

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


import { CafcreportsComponent } from '../../modules/cafcreports/cafcreports.component';
import { CafcreportComponent } from '../../modules/cafcreport/cafcreport.component';

import { CareersComponent } from '../../modules/careers/careers.component';


import { SharedModule } from '../../shared/shared.module';

import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    DefaultComponent,

    HomeComponent,
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

    CafcreportsComponent,
    CafcreportComponent,

    CareersComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class DefaultModule { }
