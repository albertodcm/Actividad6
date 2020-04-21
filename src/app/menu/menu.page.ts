import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Checkout',
      url: '/menu/checkout',
      icon: 'receipt'
    },
    {
      title: 'Transactions',
      url: '/menu/transactions',
      icon: 'swap-vertical'
    },
    {
      title: 'Items',
      url: '/menu/items',
      icon: 'list'
    },
  ];


  constructor(private authService: AuthService,
              private navCtrl: NavController) { }

  logOut() {
    this.authService.logout().then(() => {
      this.navCtrl.navigateRoot(['']);
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('menu/')[1];
    console.log(path);
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

}
