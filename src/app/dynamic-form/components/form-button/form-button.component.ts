import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "mr-form-button-component",
  template: `
    <div [class]="config.divClass" [formGroup]="group">
      <button
        [type]="config.buttonType"
        [class]="config.class"
        (click)="config.click()"
      >
      <i class="material-icons left">{{config.icon}}</i>

        {{ config.label }}
      </button>
    </div>
  `,
  styles: []
})
export class FormButtonComponent implements OnInit {
  @Input()
  click;
  config;
  group: FormGroup;
  constructor() {}

  ngOnInit() {}
}
