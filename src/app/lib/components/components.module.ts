import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info/info.component';
import { StepComponent } from './step/step.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from '../../app-routing.module';
import { LoaderComponent } from './loader/loader.component';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from '../../services/alert.service';



@NgModule({
  imports: [
    CommonModule, AppRoutingModule
  ],
  declarations: [InfoComponent, StepComponent, HeaderComponent, MenuComponent, LoaderComponent, AlertComponent],
  exports: [InfoComponent, HeaderComponent, MenuComponent, LoaderComponent,AlertComponent],
  providers: [AlertService]
})
export class ComponentsModule { }
