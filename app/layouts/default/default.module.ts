import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultComponent } from './default.component';
import { HomeComponent } from '../../modules/home/home.component';
import { AboutusComponent } from '../../modules/aboutus/aboutus.component';
import { CareersComponent } from '../../modules/careers/careers.component';
import { OurservicesComponent } from '../../modules/ourservices/ourservices.component';
import { ProfessionalsComponent } from '../../modules/professionals/professionals.component';
import { CafcreportsComponent } from '../../modules/cafcreports/cafcreports.component';
import { SharedModule } from '../../shared/shared.module';

import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    AboutusComponent,
    CareersComponent,
    OurservicesComponent,
    ProfessionalsComponent,
    CafcreportsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class DefaultModule { }
