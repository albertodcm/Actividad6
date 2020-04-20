import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreatePage } from '../create/create.page';
import { EditPage } from '../edit/edit.page';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async CreateModal() {
    console.log('create items');
    const modal = await this.modalCtrl.create({
      component: CreatePage
    });
    return await modal.present();
  }

  async EditModal() {
    console.log('edit items');
    const modal = await this.modalCtrl.create({
      component: EditPage
    });
    return await modal.present();
  }


}
