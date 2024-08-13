import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './shared/pages/home/home.component';
import { ControlPanelComponent } from './shared/pages/control-panel/control-panel.component';
import { NavHomeComponent } from './shared/components/nav-home/nav-home.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { MaterialModule } from './shared/material/material.module';

import { BodyHomeComponent } from './shared/components/body-home/body-home.component';
import { SectionHomeComponent } from './shared/components/section-home/section-home.component';
import { FooterHomeComponent } from './shared/components/footer-home/footer-home.component';
import { HeaderComponent } from './shared/components/header-home/header-home.component';
import { ReforceSectionComponent } from './shared/components/reforce-section/reforce-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ControlPanelComponent,
    NavHomeComponent,
    SidebarComponent,
    HeaderComponent,
    BodyHomeComponent,
    SectionHomeComponent,
    FooterHomeComponent,
    ReforceSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
