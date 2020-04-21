import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.page.html',
  styleUrls: ['./sale.page.scss'],
})
export class SalePage implements OnInit {

  constructor(private navCtr: NavController,
              public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  checkout() {
    console.log('Entro al boton');
    this.navCtr.navigateForward(['/menu/checkout']);
    console.log('bai');
    this.modalCtrl.dismiss();
  }
}
