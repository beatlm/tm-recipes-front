import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'mr-form-table-pasos',
  template: `
  <div [class]= "config.divClass"
  [formGroup]="group">
  <table class="collection">
            <tr *ngFor="let pasoAdded of config.lista;let i = index">
                <td class="collection-item">{{pasoAdded}}</td>
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
export class FormTablePasosComponent implements OnInit {
  config;
  group: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
