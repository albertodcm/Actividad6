import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Item } from 'src/models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private afs: AngularFirestore) { }

  //sirve para hacer el update o cuando se necesite en cualquier otra vista
  getItem(id: string){
    return this.afs.doc(`items/${id}`).snapshotChanges().pipe(
      map(doc => {
        const data = doc.payload.data() as any;
        const id = doc.payload.id;

        return {id, ...data} as Item;
      })
    )
  }

  getItems() {
    return this.afs.collection('items').snapshotChanges().pipe(
      map(snap => snap.map(doc => {
        const data = doc.payload.doc.data() as any;
        const id = doc.payload.doc.id;

        return {id, ...data} as Item;
      }))
    );
  }

  addItem(item: Item) {
    const id = this.afs.createId();
    item.id = id;

    return this.afs.doc(`items/${id}`).set(item);
  }

  updateItem(item: Item) {
    return this.afs.doc(`items/${item.id}`).update(item);
  }

  deleteItem(id: string) {
    return this.afs.doc(`items/${id}`).delete();
  }
}
