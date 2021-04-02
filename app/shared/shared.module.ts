import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SitemapComponent } from './components/sitemap/sitemap.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { ImagebarComponent } from './components/imagebar/imagebar.component';

import { NewsComponent } from './components/news/news.component';
import { WelcomemessageComponent } from './components/welcomemessage/welcomemessage.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactinfotableComponent } from './components/contactinfotable/contactinfotable.component';
import { AccessComponent } from './components/access/access.component';
import { OverviewComponent } from './components/overview/overview.component';
import { KeyfeaturesComponent } from './components/keyfeatures/keyfeatures.component';
import { AboutComponent } from './components/about/about.component';
import { AboutusblurbComponent } from './components/aboutusblurb/aboutusblurb.component';

import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

import { OfficecardComponent } from './components/officecard/officecard.component';
import { PatentsblurbComponent } from './components/patentsblurb/patentsblurb.component';
import { DesignsblurbComponent } from './components/designsblurb/designsblurb.component';
import { TrademarksblurbComponent } from './components/trademarksblurb/trademarksblurb.component';
import { LitigationblurbComponent } from './components/litigationblurb/litigationblurb.component';
import { PatentstrategiesblurbComponent } from './components/patentstrategiesblurb/patentstrategiesblurb.component';
import { PatentsearchesblurbComponent } from './components/patentsearchesblurb/patentsearchesblurb.component';
import { PatentsandutilitymodelsComponent } from './components/patentsandutilitymodels/patentsandutilitymodels.component';
import { DesignsandtrademarksComponent } from './components/designsandtrademarks/designsandtrademarks.component';
import { LitigationandstrategyComponent } from './components/litigationandstrategy/litigationandstrategy.component';
import { CourtcasereportsComponent } from './components/courtcasereports/courtcasereports.component';
import { CareerspageComponent } from './components/careerspage/careerspage.component';
import { ComputersblurbComponent } from './components/computersblurb/computersblurb.component';
import { MechanicalblurbComponent } from './components/mechanicalblurb/mechanicalblurb.component';
import { DesignsteamblurbComponent } from './components/designsteamblurb/designsteamblurb.component';
import { MedicaldevicesblurbComponent } from './components/medicaldevicesblurb/medicaldevicesblurb.component';
import { ChemicalsblurbComponent } from './components/chemicalsblurb/chemicalsblurb.component';
import { GamesblurbComponent } from './components/gamesblurb/gamesblurb.component';
import { LitigationteamblurbComponent } from './components/litigationteamblurb/litigationteamblurb.component';
import { PracticeareasComponent } from './components/practiceareas/practiceareas.component';
import { PeopleComponent } from './components/people/people.component';
import { PersonComponent } from './components/person/person.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    SitemapComponent,
    TopbarComponent,
    ImagebarComponent,
    NewsComponent,
    WelcomemessageComponent,
    ContactComponent,
    ContactinfotableComponent,
    AccessComponent,
    OverviewComponent,
    KeyfeaturesComponent,
    AboutComponent,
    AboutusblurbComponent,
    OfficecardComponent,
    PatentsblurbComponent,
    DesignsblurbComponent,
    TrademarksblurbComponent,
    LitigationblurbComponent,
    PatentstrategiesblurbComponent,
    PatentsearchesblurbComponent,
    PatentsandutilitymodelsComponent,
    DesignsandtrademarksComponent,
    LitigationandstrategyComponent,
    CourtcasereportsComponent,
    CareerspageComponent,
    ImagebarComponent,
    ComputersblurbComponent,
    MechanicalblurbComponent,
    DesignsteamblurbComponent,
    MedicaldevicesblurbComponent,
    ChemicalsblurbComponent,
    GamesblurbComponent,
    LitigationteamblurbComponent,
    PracticeareasComponent,
    PeopleComponent,
    PersonComponent    
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    MatTabsModule,
    MatExpansionModule,
    MatSidenavModule,
    MatBottomSheetModule,
    RouterModule,
    FlexLayoutModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    SitemapComponent,
    TopbarComponent,
    ImagebarComponent,
    NewsComponent,
    WelcomemessageComponent,
    ContactComponent,
    ContactinfotableComponent,
    AccessComponent,
    AboutComponent,
    AboutusblurbComponent,
    OverviewComponent,
    KeyfeaturesComponent,
    OfficecardComponent,
    PatentsblurbComponent,
    DesignsblurbComponent,
    TrademarksblurbComponent,
    LitigationblurbComponent,
    PatentstrategiesblurbComponent,
    PatentsearchesblurbComponent,
    PatentsandutilitymodelsComponent,
    DesignsandtrademarksComponent,
    LitigationandstrategyComponent,
    CourtcasereportsComponent,
    CareerspageComponent,
    PracticeareasComponent,
    PeopleComponent,
    PersonComponent
  ]
})

export class SharedModule {}
