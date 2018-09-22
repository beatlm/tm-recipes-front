import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from '../../app-routing.module';
import { LoaderComponent } from './loader/loader.component';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from '../../services/alert.service';
import { TmFormatPipe } from './pipes/tm.format.pipe';




@NgModule({
  imports: [
    CommonModule, AppRoutingModule
  ],
  declarations: [ HeaderComponent, MenuComponent, LoaderComponent, AlertComponent, TmFormatPipe],
  exports: [HeaderComponent, MenuComponent, LoaderComponent,AlertComponent, TmFormatPipe],
  providers: [AlertService]
})
export class ComponentsModule { }
