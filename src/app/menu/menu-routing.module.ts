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
  },
  {
    path: 'tip',
    loadChildren: () => import('./tip/tip.module').then( m => m.TipPageModule)
  },
  {
    path: 'sale',
    loadChildren: () => import('./sale/sale.module').then( m => m.SalePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
