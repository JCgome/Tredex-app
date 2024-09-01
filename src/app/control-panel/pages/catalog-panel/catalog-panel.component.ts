import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-catalog-panel',
  templateUrl: './catalog-panel.component.html',
  styleUrls: ['./catalog-panel.component.scss'],
})
export class CatalogPanelComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    this.sidenav.open();
  }
}
