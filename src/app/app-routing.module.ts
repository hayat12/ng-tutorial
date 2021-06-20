import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading } from '@angular/router';
const routes: Routes = [
  {
    path: 'ngrx',
    children:[
      {
        path: '',
        loadChildren: ()=>import('./dashboard/dashboard.module').then((m)=>m.DashboardModule)
      },
      {
        path: 'products',
        loadChildren: ()=>import('./products/products.module').then((m)=>m.ProductsModule)
      },
      {
        path: 'users',
        loadChildren: ()=>import('./users/users.module').then((m)=>m.UsersModule)
      },
    ]
  },
  {
    path:'**',
    redirectTo: 'ngrx'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash:true, preloadingStrategy: NoPreloading})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
