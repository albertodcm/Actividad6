import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreatePage } from '../create/create.page';
import { EditPage } from '../edit/edit.page';
import { Item } from 'src/models/item.model';
import { ItemService } from 'src/app/services/itemService.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {

  show = 'available';
  availableItems: Item[];

  constructor(public modalCtrl: ModalController,
              private itemService: ItemService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems().subscribe((items: Item[]) => {
      this.availableItems = items.filter((item: Item) => {
        return item.status === 'available';
      });
    });
  }

  deleteItem(itemId: string): void {
    this.itemService.deleteItem(itemId).then(() => {
      console.log('Product deleted');
    });
  }


  statusItem(itemId: string): void {

    // if (this.itemService) {
    //   const updatedItem: Item = {
    //     ...this.itemService
    //     id: this.item.id
    //   };

    //   this.itemService.statusItem(updatedItem).then(() => {
    //   }).catch((error) => {
    //     console.log(error);
    //   });
    // } else {
    //   console.log('error');
    // }
  }


  async CreateModal() {
    console.log('create items');
    const modal = await this.modalCtrl.create({
      component: CreatePage
    });
    return await modal.present();
  }

  async EditModal(itemId: string) {
    console.log('edit items');
    const modal = await this.modalCtrl.create({
      component: EditPage,
      componentProps: {
        itemId
      }
    });
    return await modal.present();
  }


}
