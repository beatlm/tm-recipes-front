import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';


@Injectable()
export class LoaderService {

  loading$: Observable<boolean> = Observable.of(false);

  constructor() { }

  fireLoader() {
    this.loading$ = Observable.of(true);
  }

  stopLoader() {
    this.loading$ = Observable.of(false);
  }
}