import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { NavHomeComponent } from './home/components/nav-home/nav-home.component';
import { MaterialModule } from './material/material.module';

import { BodyHomeComponent } from './home/components/body-home/body-home.component';
import { SectionHomeComponent } from './home/components/section-home/section-home.component';
import { FooterHomeComponent } from './home/components/footer-home/footer-home.component';
import { HeaderComponent } from './home/components/header-home/header-home.component';
import { ReforceSectionComponent } from './home/components/reforce-section/reforce-section.component';
import { ControlPanelModule } from './control-panel/control-panel.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ControlPanelComponent,
    NavHomeComponent,
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
    ControlPanelModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
