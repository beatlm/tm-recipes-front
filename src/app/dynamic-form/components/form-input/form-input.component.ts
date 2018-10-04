import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'mr-form-input-component',
  template: 
  `
  <div 
    [formGroup]="group">
    <label>{{ config.label }}</label>
    <input
      type="text"
      [attr.placeholder]="config.placeholder"
      [formControlName]="config.name" />
  </div>
  `,
  styles: []
})
export class FormInputComponent implements OnInit {
  config;
  group: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
