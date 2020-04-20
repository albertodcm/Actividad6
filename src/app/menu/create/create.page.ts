import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Item } from 'src/models/item.model';
import { ItemService } from 'src/app/services/itemService.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

  constructor(public modalCtrl: ModalController,
              private itemService: ItemService) { }

  itemForm: FormGroup;

  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    this.itemForm = new FormGroup ({
      name: new FormControl ('', [Validators.required]),
      price: new FormControl ('', [Validators.required])
    });

  }


  CreateProduct(): void {
    if (this.itemForm.valid) {
      const addItem: Item = {
        id: null,
        status: 'available',
        ...this.itemForm.value
      };
      this.itemService.addItem(addItem).then(() => {
        this.dismiss();
      }).catch((error) => {
        console.log(error);
      });
      console.log('si se creo');
    } else {
      console.log('no se creo');
    }
  }

  dismiss() {
    console.log(' Entro al dismiss ');
    this.modalCtrl.dismiss();
  }

}
