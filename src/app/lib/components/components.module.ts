import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info/info.component';
import { StepComponent } from './step/step.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InfoComponent, StepComponent],
  exports: [InfoComponent]
})
export class ComponentsModule { }
