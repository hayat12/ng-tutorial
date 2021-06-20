import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { HeaderComponent } from './layout/header/header.component'
import { FooterComponent } from './layout/footer/footer.component'
import {  BreakcrumbComponent } from './breakcrumb/breakcrumb.component';
@NgModule({
  declarations: [
    // HeaderComponent,
    // FooterComponent,
    BreakcrumbComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
