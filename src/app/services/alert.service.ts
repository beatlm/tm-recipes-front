
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
  create(title: string, type: string, time: number, body: string) {
    console.log("alert.service create "+title)
    this.alertSettings$.next({
      title,
      type,
      time,
      body
    });
    console.log("alert service create end")
  }
}
