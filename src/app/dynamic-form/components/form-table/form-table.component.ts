import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'mr-form-table',
  template: `
  <div [class]= "config.divClass" [formGroup]="group">  
  <div [class]= "config.divClass" [formArrayName]="config.name">
  <table [class] ="config.class">
    <tr *ngFor="let data of config.list; let i = index">
    <div [formGroupName]="i">
      <td>
        <input type="text" value="{{data.name}}" formControlName="name"/>
      </td>
      <td>
        <input type="number" value="{{data.amount}}" formControlName="amount" />
      </td>
      <td>
        <a class="btn-small" (click)="config.clickDelete(i)">
        <i class="material-icons left">delete</i>
        </a>
      </td>
      </div>
    </tr>
</table>
</div>
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
