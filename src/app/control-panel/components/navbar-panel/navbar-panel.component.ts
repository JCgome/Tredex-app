import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-panel',
  templateUrl: './navbar-panel.component.html',
  styleUrls: ['./navbar-panel.component.scss'],
})
export class NavbarPanelComponent implements OnInit {
  public sidebarItems = [
    { label: 'Inicio', icon: 'home' },
    { label: 'Catalogo', icon: 'sell' },
    { label: 'Ventas', icon: 'attach_money' },
    { label: 'Clientes', icon: 'group' },
    { label: 'Opciones', icon: 'settings' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
