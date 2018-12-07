import { Injectable } from "@angular/core";
import { Router, NavigationStart } from "@angular/router";
import { Observable } from "rxjs";
import { Subject } from "rxjs/Subject";
import { RecipesService } from "./recipes.service";
@Injectable()
export class ConfirmService {
  private subject = new Subject<any>();
  constructor() {}
  confirm(message: string, siFn: () => void, noFn: () => void) {
    console.log("Confirm del service");
    this.setConfirmation(message, siFn, noFn);
  }
  setConfirmation(message: string, siFn: () => void, noFn: () => void) {
    let that = this;
    console.log("setConfirmation del service " + message);
    console.log("yes function " + siFn);
    console.log("no function " + noFn);

    this.subject.next({
      type: "confirm",
      text: message,
      siFn: function() {
        that.subject.next(); //this will close the modal
        siFn();
      },
      noFn: function() {
        that.subject.next();
        noFn();
      }
    });
  }

  getMessage(): Observable<any> {
    console.log("getMesage");
    return this.subject.asObservable();
  }
}
