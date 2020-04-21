import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { SalePage } from '../sale/sale.page';

@Component({
  selector: 'app-tip',
  templateUrl: './tip.page.html',
  styleUrls: ['./tip.page.scss'],
})
export class TipPage implements OnInit {

  total = 0;
  totalFinal = 0;
  tip20 = 0;
  tip15 = 0;
  tip10 = 0;
  // customTip = 0;

  constructor(public modalCtrl: ModalController,
              public alertController: AlertController) { }

  ngOnInit() {
    this.calcularTip();
  }

  async showConfirmation(cartId: string) {
    const modal = await this.modalCtrl.create({
      component: TipPage,
      componentProps: {

      }
    });
    return await modal.present();
  }

  calcularTip() {
    this.tip20 = ((this.total / 100) * 20);
    this.tip15 = ((this.total / 100) * 15);
    this.tip10 = ((this.total / 100) * 10);

    this.tip20 = parseFloat(this.tip20.toFixed(2));
    this.tip15 = parseFloat(this.tip15.toFixed(2));
    this.tip10 = parseFloat(this.tip10.toFixed(2));
  }


  async customTipAlert() {
    console.log('entro al alert');
    const alert = await this.alertController.create ({
      header: 'Custom tip:',
      inputs: [
        {
          name: 'customTip',
          type: 'number',
          placeholder: 'Add your custom tip'
        }
      ],
      buttons: [
        {
          text: 'CANCEL',
          role: 'cancel',
        }, {
          text: 'OK',
          handler: data => {
            console.log(data.customTip);
            this.total = this.total + parseFloat(data.customTip);
          }
        }
      ]
    });
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(this.total);
    this.procesarPago();
  }

  async procesarPago() {
  this.modalCtrl.dismiss();
  const modal = await this.modalCtrl.create({
    component: SalePage,
  });
  return await modal.present();
  }
}
