import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { SalePage } from '../sale/sale.page';
import { LoadingController } from '@ionic/angular';

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
  button = '';
  // customTip = 0;

  constructor(public modalCtrl: ModalController,
              public alertController: AlertController,
              public loadingController: LoadingController) { }

  ngOnInit() {
    this.calcularTip();
  }

  async presentLoading(text: string) {
    const loading = await this.loadingController.create({
      message: text,
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
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
    this.button = 'customtip';
    await alert.present();
    const result = await alert.onDidDismiss();
    console.log(this.total);
    this.procesarPago(this.button);
  }

  async procesarPago(button) {
    console.log('entro a procesar');
    if (button === '20') {
      console.log('es 20');
      this.total = this.total + this.tip20;
    } else if ( button === '15' ) {
      console.log('es 15');
      this.total = this.total + this.tip15;
    } else if ( button === '10' ) {
      console.log('es 10');
      this.total = this.total + this.tip10;
    }
    await this.presentLoading('Processing Tip...');
    console.log(this.total);
    this.modalCtrl.dismiss();
    this.total = 0;
    const modal = await this.modalCtrl.create({
    component: SalePage,

  });
    return await modal.present();
  }
}
