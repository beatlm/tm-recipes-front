import { AlertService } from './../../services/alert.service';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mr-login',
  templateUrl: './login.html',
  styles: []
})
export class LoginComponent implements OnInit {

  constructor(   private loginService: LoginService,
  private alertService: AlertService) { }

  ngOnInit() {
  }
  login() {
    this.loginService.getLogin$().subscribe(this.isOk.bind(this));
  }

  private isOk(resultado: string) {
    window.open(resultado, "_blank");
   // window.location.href = resultado;
        this.alertService.create("Login ok.","success",2500);
  }
}
