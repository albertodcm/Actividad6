import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { MenuPage } from './menu.page';



const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'checkout',
        loadChildren: () => import('./checkout/checkout.module').then( m => m.CheckoutPageModule)
      },
      {
        path: 'transactions',
        loadChildren: () => import('./transactions/transactions.module').then( m => m.TransactionsPageModule)
      },
      {
        path: 'items',
        loadChildren: () => import('./items/items.module').then( m => m.ItemsPageModule)
      },
      {
        path: '',
        redirectTo: '/menu/checkout',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/menu/checkout',
    pathMatch: 'full'
  }
];

/* @NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
}) */

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}


// {
//   path: 'checkout',
//   loadChildren: () => import('./checkout/checkout.module').then( m => m.CheckoutPageModule)
// },
// {
//   path: 'transactions',
//   loadChildren: () => import('./transactions/transactions.module').then( m => m.TransactionsPageModule)
// },
// {
//   path: 'items',
//   loadChildren: () => import('./items/items.module').then( m => m.ItemsPageModule)
// },
// {
//   path: 'charge',
//   loadChildren: () => import('./charge/charge.module').then( m => m.ChargePageModule)
// },
// {
//   path: '',
//   redirectTo: 'checkout', pathMatch: 'full'
// }
