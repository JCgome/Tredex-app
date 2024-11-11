import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { CatalogPanelComponent } from './control-panel/pages/catalog-panel/catalog-panel.component';
import { CustomersPanelComponent } from './control-panel/pages/customers-panel/customers-panel.component';
import { OptionsPanelComponent } from './control-panel/pages/options-panel/options-panel.component';
import { ProductsPanelComponent } from './control-panel/pages/products-panel/products-panel.component';
import { SalesPanelComponent } from './control-panel/pages/sales-panel/sales-panel.component';
import { LaunchPanelComponent } from './control-panel/pages/launch-panel/launch-panel.component';
import { EditCustomerComponent } from './control-panel/pages/customers-panel/edit-customers/edit-customer.component';
import { MoreDetailSalesComponent } from './control-panel/pages/sales-panel/more-detail-sales/more-detail-sales.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'panel',
    component: ControlPanelComponent,
    children: [
      { path: 'launch', component: LaunchPanelComponent },
      { path: 'catalog', component: CatalogPanelComponent },
      { path: 'products', component: ProductsPanelComponent },
      { path: 'sales', component: SalesPanelComponent },
      { path: 'client', component: CustomersPanelComponent },
      { path: 'options', component: OptionsPanelComponent },
      { path: '', redirectTo: 'launch', pathMatch: 'full' },
    ],
  },
  {
    path: 'edit-customers',
    component: EditCustomerComponent,
  },
  {
    path: 'more-sales',
    component: MoreDetailSalesComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
