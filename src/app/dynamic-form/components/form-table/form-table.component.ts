import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'mr-form-table',
  template: `
  <div [class]= "config.divClass"
  [formGroup]="group">
  <table [class] ="config.class">
  <tr *ngFor="let data of config.list;let i = index">
      <td>{{data.name}}</td>
      <td>{{data.amount}}</td>
      <td>
          <a class="btn-small" (click)="config.click(i)">
              <i class="material-icons left">delete</i>
          </a>
      </td>
  </tr>
</table>
</div>
  `,
  styles: []
})
export class FormTableComponent implements OnInit {
  config;
  group: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
