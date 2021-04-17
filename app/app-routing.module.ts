import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { HomeComponent } from './modules/home/home.component';
import { AboutusComponent } from './modules/aboutus/aboutus.component';
import { OurservicesComponent } from './modules/Ourservices/Ourservices.component';
import { ProfessionalsComponent } from './modules/professionals/professionals.component';
import { CareersComponent } from './modules/careers/careers.component';
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

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [{
      path: '',
      component: HomeComponent,
      children: [{
        path: 'welcomemessage',
        outlet: 'welcomemessage',
        component: WelcomemessageComponent
      },
      {
        path: 'news',
        outlet: 'news',
        component: NewsComponent
      },
      {
        path: 'contact',
        outlet: 'contact',
        component: ContactComponent
      },
      {
        path: 'publications',
        outlet: 'publications',
        component: PublicationsComponent
      }]
  }, {
    path: 'aboutus',
    component: AboutusComponent,
    children: [{
      path: 'about',
      outlet: 'about',
      component: AboutComponent
    },
    {
      path: 'aboutus',
      outlet: 'overview',
      component: OverviewComponent
    },
    {
      path: 'aboutus',
      outlet: 'keyfeatures',
      component: KeyfeaturesComponent
    },
    {
      path: 'contact',
      outlet: 'contact',
      component: ContactComponent
    }]
  }, {
    path: 'ourservices',
    component: OurservicesComponent,
    children: [
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
      }
    ]
  }, {
    path: 'professionals',
    component: ProfessionalsComponent
  }, {
    path: 'people',
    component: PeopleComponent,
    children: [
      {
        path: 'person',
        component: PersonComponent
      }
    ]
  }, {
    path: 'careers',
    component: CareersComponent
  }, {
    path: 'welcomemessage',
    component: WelcomemessageComponent
  }, {
    path: 'news',
    component: NewsComponent
  }, {
    path: 'contact',
    component: ContactComponent
  }, {
    path: 'about',
    component: AboutComponent
  }, {
    path: 'overview',
    component: OverviewComponent
  }, {
    path: 'keyfeatures',
    component: KeyfeaturesComponent
  }, {
    path: 'access',
    component: AccessComponent
  }, {
    path: 'patentsandutilitymodels',
    component: PatentsandutilitymodelsComponent
  }, {
    path: 'designsandtrademarks',
    component: DesignsandtrademarksComponent
  }, {
    path: 'litigationandstrategy',
    component: LitigationandstrategyComponent
  }, {
    path: 'courtcasereports',
    component: CourtcasereportsComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(
    routes, {
      onSameUrlNavigation: 'reload',
      scrollPositionRestoration: 'top'
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
