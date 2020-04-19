import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TransactionPage } from '../transaction/transaction.page';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: TransactionPage,
    });
    return await modal.present();
  }



  showTrans() {
    this.presentModal();
  }
}
