import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';

import { WelcomepageComponent } from './modules/welcomepage/welcomepage.component';
import { NewspageComponent } from './modules/newspage/newspage.component';
import { ContactpageComponent } from './modules/contactpage/contactpage.component';
import { PublicationspageComponent } from './modules/publicationspage/publicationspage.component';
import { PublicationpageComponent }  from './modules/publicationpage/publicationpage.component';

import { AboutusComponent } from './modules/aboutus/aboutus.component';
import { AboutpageComponent } from './modules/aboutpage/aboutpage.component';
import { KeyfeaturespageComponent } from './modules/keyfeaturespage/keyfeaturespage.component';
import { OverviewpageComponent } from './modules/overviewpage/overviewpage.component';
import { AboutcontactpageComponent} from './modules/aboutcontactpage/aboutcontactpage.component';

import { OurservicesComponent } from './modules/Ourservices/Ourservices.component';
import { PatentspageComponent } from './modules/patentspage/patentspage.component';
import { DesignstmpageComponent } from './modules/designstmpage/designstmpage.component';
import { LitigationpageComponent } from './modules/litigationpage/litigationpage.component';
import { CasestudiespageComponent } from './modules/casestudiespage/casestudiespage.component';


import { ProfessionalsComponent } from './modules/professionals/professionals.component';
import { ProfessionalComponent } from './modules/professional/professional.component';
import { ProPracticeareasComponent } from './modules/professionals/pro-practiceareas/pro-practiceareas.component';
import { ProInfoprocComponent } from './modules/professionals/pro-infoproc/pro-infoproc.component';
import { ProCommComponent } from './modules/professionals/pro-comm/pro-comm.component';
import { ProElecComponent } from './modules/professionals/pro-elec/pro-elec.component';
import { ProMechComponent } from './modules/professionals/pro-mech/pro-mech.component';
import { ProDesignsComponent } from './modules/professionals/pro-designs/pro-designs.component';
import { ProMeddevicesComponent } from './modules/professionals/pro-meddevices/pro-meddevices.component';
import { ProChempharmabioComponent } from './modules/professionals/pro-chempharmabio/pro-chempharmabio.component';
import { ProToysgamesComponent } from './modules/professionals/pro-toysgames/pro-toysgames.component';
import { ProLitComponent } from './modules/professionals/pro-lit/pro-lit.component';
import { ProPatattorneysComponent } from './modules/professionals/pro-patattorneys/pro-patattorneys.component';
import { ProAdvisorsComponent } from './modules/professionals/pro-advisors/pro-advisors.component';
import { ProPatengineersComponent } from './modules/professionals/pro-patengineers/pro-patengineers.component';
import { ProInternationalComponent } from './modules/professionals/pro-international/pro-international.component';

import { CafcreportComponent } from './modules/cafcreport/cafcreport.component';
import { CafcallComponent } from './modules/cafcreports/cafcall/cafcall.component';
import { Cafc2019Component } from './modules/cafcreports/cafc2019/cafc2019.component';
import { Cafc2018Component } from './modules/cafcreports/cafc2018/cafc2018.component';
import { Cafc2017Component } from './modules/cafcreports/cafc2017/cafc2017.component';
import { Cafc2016Component } from './modules/cafcreports/cafc2016/cafc2016.component';
import { Cafc2015Component } from './modules/cafcreports/cafc2015/cafc2015.component';
import { Cafc2014Component } from './modules/cafcreports/cafc2014/cafc2014.component';
import { Cafc2013Component } from './modules/cafcreports/cafc2013/cafc2013.component';
import { Cafc2012Component } from './modules/cafcreports/cafc2012/cafc2012.component';
import { Cafc2011Component } from './modules/cafcreports/cafc2011/cafc2011.component';
import { Cafc2010Component } from './modules/cafcreports/cafc2010/cafc2010.component';
import { Cafc2009Component } from './modules/cafcreports/cafc2009/cafc2009.component';
import { Cafc2008Component } from './modules/cafcreports/cafc2008/cafc2008.component';
import { Cafc2007Component } from './modules/cafcreports/cafc2007/cafc2007.component';
import { Cafc2006Component } from './modules/cafcreports/cafc2006/cafc2006.component';
import { Cafc2005Component } from './modules/cafcreports/cafc2005/cafc2005.component';

import { CareerspageComponent } from './modules/careers/careerspage/careerspage.component';
import { SetsumeikaipageComponent } from './modules/careers/setsumeikaipage/setsumeikaipage.component';
import { SetsumeikaiguidepageComponent } from './modules/careers/setsumeikaiguidepage/setsumeikaiguidepage.component';
import { BoshuyokopageComponent } from './modules/careers/boshuyokopage/boshuyokopage.component';
import { WorkenvironmentComponent } from './modules/careers/workenvironment/workenvironment.component';

import { PeopleComponent } from './shared/components/people/people.component';
import { PersonComponent } from './shared/components/person/person.component';

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
        path: 'cafcreport',
        component: CafcreportComponent
      },
      {
        path: 'aboutus',
        component: AboutusComponent
      },
      {
        path: 'aboutpage',
        component: AboutpageComponent
      },
      {
        path: 'overviewpage',
        component: OverviewpageComponent
      },
      {
        path: 'keyfeaturespage',
        component: KeyfeaturespageComponent
      },
      {
        path: 'aboutcontactpage',
        component: AboutcontactpageComponent
      },
      {
        path: 'ourservices',
        component: OurservicesComponent
      },
      {
        path: 'patentspage',
        component: PatentspageComponent
      },
      {
        path: 'designstmpage',
        component: DesignstmpageComponent
      },
      {
        path: 'litigationpage',
        component: LitigationpageComponent
      },
      {
        path: 'casestudiespage',
        component: CasestudiespageComponent
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
        path: 'pro-practiceareas',
        component: ProPracticeareasComponent
      },
      {
        path: 'pro-infoproc',
        component: ProInfoprocComponent
      },
      {
        path: 'pro-comm',
        component: ProCommComponent
      },
      {
        path: 'pro-elec',
        component: ProElecComponent
      },
      {
        path: 'pro-mech',
        component: ProMechComponent
      },
      {
        path: 'pro-designs',
        component: ProDesignsComponent
      },
      {
        path: 'pro-meddevices',
        component: ProMeddevicesComponent
      },
      {
        path: 'pro-chempharmabio',
        component: ProChempharmabioComponent
      },
      {
        path: 'pro-toysgames',
        component: ProToysgamesComponent
      },
      {
        path: 'pro-lit',
        component: ProLitComponent
      },
      {
        path: 'pro-patattorneys',
        component: ProPatattorneysComponent
      },
      {
        path: 'pro-advisors',
        component: ProAdvisorsComponent
      },
      {
        path: 'pro-patengineers',
        component: ProPatengineersComponent
      },
      {
        path: 'pro-international',
        component: ProInternationalComponent
      },
      {
        path: 'people',
        component: PeopleComponent
      },
      {
        path: 'person',
        component: PersonComponent
      },

      {
        path: 'cafcall',
        component: CafcallComponent
      },
      {
        path: 'cafc2019',
        component: Cafc2019Component
      },
      {
        path: 'cafc2018',
        component: Cafc2018Component
      },
      {
        path: 'cafc2017',
        component: Cafc2017Component
      },
      {
        path: 'cafc2016',
        component: Cafc2016Component
      },
      {
        path: 'cafc2015',
        component: Cafc2015Component
      },
      {
        path: 'cafc2014',
        component: Cafc2014Component
      },
      {
        path: 'cafc2013',
        component: Cafc2013Component
      },
      {
        path: 'cafc2012',
        component: Cafc2012Component
      },
      {
        path: 'cafc2011',
        component: Cafc2011Component
      },
      {
        path: 'cafc2010',
        component: Cafc2010Component
      },
      {
        path: 'cafc2009',
        component: Cafc2009Component
      },
      {
        path: 'cafc2008',
        component: Cafc2008Component
      },
      {
        path: 'cafc2007',
        component: Cafc2007Component
      },
      {
        path: 'cafc2006',
        component: Cafc2006Component
      },
      {
        path: 'cafc2005',
        component: Cafc2005Component
      },
      {
        path: 'careerspage',
        component: CareerspageComponent
      },
      {
        path: 'setsumeikaipage',
        component: SetsumeikaipageComponent
      },
      {
        path: 'setsumeikaiguidepage',
        component: SetsumeikaiguidepageComponent
      },
      {
        path: 'boshuyokopage',
        component: BoshuyokopageComponent
      },
      {
        path: 'workenvironmentpage',
        component: WorkenvironmentComponent
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
