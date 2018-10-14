import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'mr-form-image-load',
  template: `
  <div [class]= "config.divClass"
  [formGroup]="group">
      <div class="btn">
          <span>{{config.name}}</span>
          <input  [formControlName]="config.name" type="file" (change)="config.change()" >
      </div>
      <img class="preview" [src]="config.src">
  </div>
  `,
  styles: []
})
export class FormImageLoadComponent implements OnInit {
  @Input()
  click;
    config;
    group: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
