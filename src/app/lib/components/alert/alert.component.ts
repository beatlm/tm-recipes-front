import { AlertService } from "./../../../services/alert.service";
import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  TemplateRef,
  AfterViewChecked
} from "@angular/core";
import { AlertConfigModel, AlertServiceConfigModel } from "./alert.model";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "mr-alert",
  templateUrl: "./alert.component.html"
})
export class AlertComponent implements OnInit, OnDestroy, AfterViewChecked {
  public config: AlertConfigModel;

  public display: boolean;

  private alertSubscription: Subscription;

  constructor(private alertService: AlertService) {}

  ngOnInit() {
    this.alertSubscription = this.alertService.alertStatus$.subscribe(
      (alertServiceConfig: AlertServiceConfigModel) => {
        this.config = alertServiceConfig.config;
        this.display = alertServiceConfig.display;
      }
    );
  }

  ngAfterViewChecked() {
    const button = document.getElementById("button-alert");
    if (button) {
      button.blur();
    }
  }

  onCloseAlert() {
    if (this.config.onClose) {
      this.config.onClose();
    }
    this.alertService.closeAlert();
  }

  ngOnDestroy() {
    this.alertSubscription.unsubscribe();
  }
}
