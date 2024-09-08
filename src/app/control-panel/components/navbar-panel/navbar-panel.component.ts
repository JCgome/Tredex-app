import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { sidebarItems } from 'src/app/core/data/sidebar-items.data';

@Component({
  selector: 'app-navbar-panel',
  templateUrl: './navbar-panel.component.html',
  styleUrls: ['./navbar-panel.component.scss'],
})
export class NavbarPanelComponent implements AfterViewInit {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  @ViewChild('sidenav') sidenav!: MatSidenav;
  public sidebarItems = sidebarItems;

  constructor() {}

  ngAfterViewInit() {
    this.sidenav.open();
  }
}
