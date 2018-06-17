import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'mr-alert',
  template: `
    <p>
      alert works!
    </p>
  `,
  styles: []
})
export class AlertComponent {

  constructor(public snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

}




