import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarPanelComponent } from './components/navbar-panel/navbar-panel.component';
import { MaterialModule } from '../material/material.module';
import { CardsInformationComponent } from './components/cards-information/cards-information.component';
import { CardAnaliticsComponent } from './components/card-analitics/card-analitics.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarPanelComponent,
    CardsInformationComponent,
    CardAnaliticsComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgxChartsModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  exports: [NavbarPanelComponent, CardsInformationComponent],
})
export class ControlPanelModule {}
