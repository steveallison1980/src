import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SitemapComponent } from './components/sitemap/sitemap.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { ImagebarComponent } from './components/imagebar/imagebar.component';

import { NewsComponent } from './components/news/news.component';
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
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

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
import { PublicationsComponent } from './components/publications/publications.component';
import { GototopComponent } from './components/gototop/gototop.component';
import { PublicationComponent } from './components/publication/publication.component';
import { CafcComponent } from './components/cafc/cafc.component';
import { CafcdetailsComponent } from './components/cafcdetails/cafcdetails.component';
import { CareersComponent } from './components/careers/careers.component';
import { SetsumeikaiComponent } from './components/setsumeikai/setsumeikai.component';
import { SetsumeikaiguideComponent } from './components/setsumeikaiguide/setsumeikaiguide.component';
import { BoshuyokoComponent } from './components/boshuyoko/boshuyoko.component';
import { WorkenvComponent } from './components/workenv/workenv.component';
import { TitletextComponent } from './components/titletext/titletext.component';
import { SpanrendererComponent } from './components/spanrenderer/spanrenderer.component';
import { ListrendererComponent } from './components/listrenderer/listrenderer.component';
import { ImagerendererComponent } from './components/imagerenderer/imagerenderer.component';
import { ParagraphrendererComponent } from './components/paragraphrenderer/paragraphrenderer.component';
import { HeaderrendererComponent } from './components/headerrenderer/headerrenderer.component';
import { ElementrendererComponent } from './components/elementrenderer/elementrenderer.component';
import { ContentrendererComponent } from './components/contentrenderer/contentrenderer.component';
import { CardrendererComponent } from './components/cardrenderer/cardrenderer.component';
import { ExpansionrendererComponent } from './components/expansionrenderer/expansionrenderer.component';
import { TitledimagerendererComponent } from './components/titledimagerenderer/titledimagerenderer.component';
import { ElementgridrendererComponent } from './components/elementgridrenderer/elementgridrenderer.component';
import { DesignexamplerendererComponent } from './components/designexamplerenderer/designexamplerenderer.component';
import { TablerendererComponent } from './components/tablerenderer/tablerenderer.component';
import { StaticcardComponent } from './staticcard/staticcard.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    SitemapComponent,
    TopbarComponent,
    ImagebarComponent,
    NewsComponent,
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
    PersonComponent,
    PublicationsComponent,
    GototopComponent,
    PublicationComponent,
    CafcComponent,
    CafcdetailsComponent,
    CareersComponent,
    SetsumeikaiComponent,
    SetsumeikaiguideComponent,
    BoshuyokoComponent,
    WorkenvComponent,
    TitletextComponent,
    SpanrendererComponent,
    ListrendererComponent,
    ImagerendererComponent,
    ParagraphrendererComponent,
    HeaderrendererComponent,
    ElementrendererComponent,
    ContentrendererComponent,
    CardrendererComponent,
    ExpansionrendererComponent,
    TitledimagerendererComponent,
    ElementgridrendererComponent,
    DesignexamplerendererComponent,
    TablerendererComponent,
    StaticcardComponent
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
    MatInputModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    FormsModule,
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
    PracticeareasComponent,
    PeopleComponent,
    PersonComponent,
    PublicationsComponent,
    GototopComponent,
    PublicationComponent,
    CafcComponent,
    CafcdetailsComponent,
    CareersComponent,
    SetsumeikaiComponent,
    SetsumeikaiguideComponent,
    BoshuyokoComponent,
    WorkenvComponent,
    TitletextComponent,
    ImagerendererComponent,
    HeaderrendererComponent,
    SpanrendererComponent,
    ParagraphrendererComponent,
    ElementrendererComponent,
    ListrendererComponent,
    ContentrendererComponent,
    CardrendererComponent,
    ExpansionrendererComponent,
    TitledimagerendererComponent,
    ElementgridrendererComponent,
    DesignexamplerendererComponent,
    StaticcardComponent
  ]
})

export class SharedModule {}
