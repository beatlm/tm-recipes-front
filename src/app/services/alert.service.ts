import { AlertConfigModel, AlertServiceConfigModel } from './../lib/components/alert/alert.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AlertService {
  private _config = new AlertConfigModel();

  private alertStatus: BehaviorSubject<
    AlertServiceConfigModel
  > = new BehaviorSubject<AlertServiceConfigModel>({
    display: false,
    config: this._config
  });

  public alertStatus$ = this.alertStatus.asObservable();

  constructor(
    private router: Router
  ) {}

  public showAlert(alert: AlertConfigModel) {
    this.displayAlert(alert, true);
  }

  public closeAlert() {
    this.displayAlert(new AlertConfigModel(), false);
  }
  private displayAlert(alert: AlertConfigModel, display = true) {
    let serviceConfig = new AlertServiceConfigModel();
    serviceConfig.display = display;
    serviceConfig.config = alert;


    this.alertStatus.next(serviceConfig);
  }
}
