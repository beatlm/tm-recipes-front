import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
