import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarPanelComponent } from './components/navbar-panel/navbar-panel.component';
import { MaterialModule } from '../material/material.module';
import { CardsInformationComponent } from './components/cards-information/cards-information.component';

@NgModule({
  declarations: [NavbarPanelComponent, CardsInformationComponent],
  imports: [CommonModule, MaterialModule],
  exports: [NavbarPanelComponent, CardsInformationComponent],
})
export class ControlPanelModule {}
