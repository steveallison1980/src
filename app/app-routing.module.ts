import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';

import { WelcomepageComponent } from './modules/welcomepage/welcomepage.component';
import { NewspageComponent } from './modules/newspage/newspage.component';
import { ContactpageComponent } from './modules/contactpage/contactpage.component';
import { PublicationspageComponent } from './modules/publicationspage/publicationspage.component';
import { PublicationpageComponent }  from './modules/publicationpage/publicationpage.component';

import { AboutusComponent } from './modules/aboutus/aboutus.component';
import { OurservicesComponent } from './modules/Ourservices/Ourservices.component';
import { ProfessionalsComponent } from './modules/professionals/professionals.component';
import { ProfessionalComponent } from './modules/professional/professional.component';
import { CareersComponent } from './modules/careers/careers.component';
import { CafcreportsComponent } from './modules/cafcreports/cafcreports.component';
import { CafcreportComponent } from './modules/cafcreport/cafcreport.component';
import { WelcomemessageComponent } from './shared/components/welcomemessage/welcomemessage.component';
import { NewsComponent } from './shared/components/news/news.component';
import { AccessComponent } from './shared/components/access/access.component';
import { ContactComponent } from './shared/components/contact/contact.component';
import { AboutComponent } from './shared/components/about/about.component';
import { OverviewComponent } from './shared/components/overview/overview.component';
import { KeyfeaturesComponent } from './shared/components/keyfeatures/keyfeatures.component';
import { PatentsandutilitymodelsComponent } from './shared/components/patentsandutilitymodels/patentsandutilitymodels.component';
import { DesignsandtrademarksComponent } from './shared/components/designsandtrademarks/designsandtrademarks.component';
import { LitigationandstrategyComponent } from './shared/components/litigationandstrategy/litigationandstrategy.component';
import { CourtcasereportsComponent } from './shared/components/courtcasereports/courtcasereports.component';
import { PeopleComponent } from './shared/components/people/people.component';
import { PersonComponent } from './shared/components/person/person.component';
import { PublicationsComponent } from './shared/components/publications/publications.component';
import { PublicationComponent } from './shared/components/publication/publication.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: WelcomepageComponent
      },
      {
        path: 'welcomepage',
        component: WelcomepageComponent
      },
      {
        path: 'newspage',
        component: NewspageComponent
      },
      {
        path: 'contactpage',
        component: ContactpageComponent
      },
      {
        path: 'publicationspage',
        component: PublicationspageComponent
      },
      {
        path: 'publicationpage',
        component: PublicationpageComponent
      },
      {
        path: 'cafcreports',
        component: CafcreportsComponent
      },
      {
        path: 'cafcreport',
        component: CafcreportComponent
      },
      {
        path: 'aboutus',
        component: AboutusComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'overview',
        component: OverviewComponent
      },
      {
        path: 'keyfeatures',
        component: KeyfeaturesComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'ourservices',
        component: OurservicesComponent
      },
      {
        path: 'patentsandutilitymodels',
        component: PatentsandutilitymodelsComponent
      },
      {
        path: 'designsandtrademarks',
        component: DesignsandtrademarksComponent
      },
      {
        path: 'litigationandstrategy',
        component: LitigationandstrategyComponent
      },
      {
        path: 'courtcasereports',
        component:CourtcasereportsComponent
      },
      {
        path: 'professionals',
        component: ProfessionalsComponent
      },
      {
        path: 'professional',
        component: ProfessionalComponent
      },
      {
        path: 'cafcreports',
        component: CafcreportsComponent
      },
      {
        path: 'cafcreport',
        component: CafcreportComponent
      },
      {
        path: 'people',
        component: PeopleComponent
      },
      {
        path: 'person',
        component: PersonComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes, {
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'top'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
