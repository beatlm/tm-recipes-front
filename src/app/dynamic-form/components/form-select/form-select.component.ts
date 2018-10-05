import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "mr-form-select-component",
  template: `
  <div [class]= "config.divClass"
  [formGroup]="group">
  <label>{{ config.label }}</label>
  <select [formControlName]="config.name">
    <option value="">{{ config.placeholder }}</option>
    <option *ngFor="let option of config.options">
      {{ option }}
    </option>
  </select>
</div>
  `,
  styles: []
})
export class FormSelectComponent implements OnInit {
  config;
  group: FormGroup;
  constructor() {}

  ngOnInit() {}
}
