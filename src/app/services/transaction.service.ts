import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Transaction } from 'src/models/transaction.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private afs: AngularFirestore) { }

  getTransaction(id: string){
    return this.afs.doc(`transactions/${id}`).snapshotChanges().pipe(
      map(doc => {
        const data = doc.payload.data() as any;
        const id = doc.payload.id;

        return {id, ...data} as Transaction;
      })
    )
  }

  getTransactions() {
    return this.afs.collection('transactions').snapshotChanges().pipe(
      map(snap => snap.map(doc => {
        const data = doc.payload.doc.data() as any;
        const id = doc.payload.doc.id;

        return {id, ...data} as Transaction;
      }))
    );
  }

  addTransaction(trans: Transaction) {
    const id = this.afs.createId();
    trans.id = id;

    return this.afs.doc(`transactions/${id}`).set(trans);
  }
}
