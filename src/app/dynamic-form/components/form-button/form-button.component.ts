import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "mr-form-button-component",
  template: `
  <div 
      class="dynamic-field form-button"
      [formGroup]="group">
      <button type="submit">
        {{ config.label }}
      </button>
    </div>
  `,
  styles: []
})
export class FormButtonComponent implements OnInit {
  config;
  group: FormGroup;
  constructor() {}

  ngOnInit() {}
}
