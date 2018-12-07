import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs";
import { Alert } from "../lib/components/alert/alert";

@Injectable()
export class AlertService {
  alertSettings$ = new Subject<Alert>();
  constructor() {}
  create(
    text: string,
    type: string,
    time: number,
    showCloseButton?: boolean,
  ) {
    console.log("alert.service create " + text);
    this.alertSettings$.next({
      text,
      type,
      time,
      showCloseButton
    });
    console.log("alert service create end");
  }
}
