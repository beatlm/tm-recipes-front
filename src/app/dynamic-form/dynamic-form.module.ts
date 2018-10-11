import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './containers/dynamic-form/dynamic-form.component';
import { FormInputComponent } from './components/form-input/form-input.component';
import { FormSelectComponent } from './components/form-select/form-select.component';
import { FormButtonComponent } from './components/form-button/form-button.component';
import { DynamicFieldDirective } from './components/dynamic-directive/dynamic-field.directive';
import { FormTableComponent } from './components/form-table/form-table.component';
import { FormTablePasosComponent } from './components/form-table-pasos/form-table-pasos.component';
import { FormImageLoadComponent } from './components/form-image-load/form-image-load.component';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  declarations: [DynamicFormComponent, FormInputComponent, FormSelectComponent, FormButtonComponent, DynamicFieldDirective, FormTableComponent, FormTablePasosComponent, FormImageLoadComponent],
  exports:[DynamicFormComponent],
  entryComponents: [
    FormButtonComponent,
    FormInputComponent,
    FormSelectComponent,
    FormTableComponent,
    FormTablePasosComponent,
    FormImageLoadComponent
  ],
})
export class DynamicFormModule { }
