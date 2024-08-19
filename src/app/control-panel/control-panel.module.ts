import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarPanelComponent } from './components/navbar-panel/navbar-panel.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [NavbarPanelComponent],
  imports: [CommonModule, MaterialModule],
  exports: [NavbarPanelComponent],
})
export class ControlPanelModule {}
