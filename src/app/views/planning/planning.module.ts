import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanningComponent } from './planning.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PlanningComponent],
  exports: [PlanningComponent]
})
export class PlanningModule { }
