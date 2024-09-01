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
import { LastContentComponent } from './components/last-content/last-content.component';
import { TablesComponent } from './components/tables/tables.component';
import { CatalogPanelComponent } from './pages/catalog-panel/catalog-panel.component';
import { ProductsPanelComponent } from './pages/products-panel/products-panel.component';
import { SalesPanelComponent } from './pages/sales-panel/sales-panel.component';
import { CustomersPanelComponent } from './pages/customers-panel/customers-panel.component';
import { OptionsPanelComponent } from './pages/options-panel/options-panel.component';
import { AppRoutingModule } from '../app-routing.module';
import { ControlPanelRoutingModuleTsModule } from './control-panel.routing.module.ts.module';
import { LaunchPanelComponent } from './pages/launch-panel/launch-panel.component';

@NgModule({
  declarations: [
    NavbarPanelComponent,
    CardsInformationComponent,
    CardAnaliticsComponent,
    LastContentComponent,
    TablesComponent,
    CatalogPanelComponent,
    ProductsPanelComponent,
    SalesPanelComponent,
    CustomersPanelComponent,
    OptionsPanelComponent,
    LaunchPanelComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    NgxChartsModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ControlPanelRoutingModuleTsModule,
  ],
  exports: [NavbarPanelComponent, CardsInformationComponent, TablesComponent],
})
export class ControlPanelModule {}
