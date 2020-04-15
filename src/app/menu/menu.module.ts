import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from './menu-routing.module';

import { MenuPage } from './menu.page';
import { CreatePage } from './create/create.page';
import { TransactionPageModule } from './transaction/transaction.module';
import { CreatePageModule } from './create/create.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule,
    TransactionPageModule,
    CreatePageModule,
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
