import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "mr-dynamic-form",
  template: `
  <form [formGroup]="form"  (ngSubmit)="submitted.emit(form.value)">
  <ng-container
        *ngFor="let field of config;"
        dynamicField
        [config]="field"
        [group]="form">
      </ng-container>
  </form>
  `,
  styles: []
})
export class DynamicFormComponent implements OnInit {
  @Input()
  config: any[] = [];

  form: FormGroup;

  @Output()
  submitted: EventEmitter<any> = new EventEmitter<any>();
  
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.createGroup();
  }
  createGroup() {
    const group = this.fb.group({});
    this.config.forEach(control =>
      group.addControl(control.name, this.fb.control({value: 'my val', disabled: true}))
    );
    return group;
  }
}
