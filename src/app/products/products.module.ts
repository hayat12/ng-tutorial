import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ListDisplayComponent } from './containers/list-display.components';
import { ListComponent } from './components/list/list.component';
@NgModule({
  declarations: [ListDisplayComponent, ListComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
