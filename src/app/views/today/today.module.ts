import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodayComponent } from './today.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TodayComponent],
  exports: [TodayComponent]
})
export class TodayModule { }
