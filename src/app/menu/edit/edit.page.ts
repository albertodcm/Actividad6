import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Item } from 'src/models/item.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ItemService } from 'src/app/services/itemService.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  item: Item;
  itemForm: FormGroup;

  constructor(public modalCtrl: ModalController,
              private navParams: NavParams,
              private itemService: ItemService) { }

  ngOnInit() {
    this.initForm();
    const itemId = this.navParams.get('itemId');
    if (itemId) {
      this.getItem(itemId);
    } else {
    }
  }

  initForm(): void {
    this.itemForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required])
    });
  }

  getItem(itemId: string) {
    this.itemService.getItem(itemId).subscribe((item: Item) => {
      this.item = item;
      this.itemForm.patchValue(item);
    });
  }

  updateItem(): void {
    if (this.itemForm.valid) {
      const updatedItem: Item = {
        ...this.itemForm.value,
        id: this.item.id
      };

      this.itemService.updateItem(updatedItem).then(() => {
        this.dismiss();
      }).catch((error) => {
        console.log(error);
      });
    } else {
      console.log('error');
    }
  }

  dismiss() {
    console.log(' Entro al dismiss ');
    this.modalCtrl.dismiss();
  }


}
