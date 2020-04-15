import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  status: 'numbers';

  constructor() {
    this.status = 'numbers';
  }

  ngOnInit() {
  }

    segmentChanged(ev: any) {
      console.log('Segment changed', ev);
      status = ev;
    }


}
