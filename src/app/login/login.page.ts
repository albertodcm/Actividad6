import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(private authService: AuthService,
              private alertCtrl: AlertController,
              private router: Router) {
  if (this.authService.isLoggedIn) {
    this.router.navigate(['/menu/checkout']);
  }
}
  ngOnInit() {
    this.initForm();
  }

  initForm(): void {
    this.loginForm = new FormGroup ({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.minLength(6)])
    });
  }

  login(): void {
    console.log('entre al log in');
    if (this.loginForm.valid) {
      console.log('entre al if');
      const email = this.loginForm.controls.email.value;
      const password = this.loginForm.controls.password.value;
      console.log('entre al a la funcion');
      this.authService.login(email, password);
      console.log('exito');
    } else {
      this.presentAlert();
    }
  }

  async presentAlert(): Promise<void> {
    const alert = await this.alertCtrl.create({
      header: 'Error!',
      message: 'Please fill in the email and password fields correctly.',
      buttons: ['Okay']
    });
    await alert.present();
  }
}
