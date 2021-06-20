import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDisplayComponent } from './containers/list-display.components';

const routes: Routes = [
  {
    path:'',
    component: ListDisplayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
