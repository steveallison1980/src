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

import { CareersComponent } from '../../modules/careers/careers.component';
import { OurservicesComponent } from '../../modules/ourservices/ourservices.component';
import { ProfessionalsComponent } from '../../modules/professionals/professionals.component';
import { ProfessionalComponent } from '../../modules/professional/professional.component';
import { CafcreportsComponent } from '../../modules/cafcreports/cafcreports.component';
import { CafcreportComponent } from '../../modules/cafcreport/cafcreport.component';
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

    CareersComponent,
    OurservicesComponent,
    ProfessionalsComponent,
    ProfessionalComponent,
    CafcreportsComponent,
    CafcreportComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class DefaultModule { }
