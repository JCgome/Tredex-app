import { Component, OnInit } from '@angular/core';
import { sidebarItems } from 'src/app/core/data/sidebar-items.data';

@Component({
  selector: 'app-navbar-panel',
  templateUrl: './navbar-panel.component.html',
  styleUrls: ['./navbar-panel.component.scss'],
})
export class NavbarPanelComponent implements OnInit {
  public sidebarItems = sidebarItems;

  constructor() {}

  ngOnInit(): void {}
}
