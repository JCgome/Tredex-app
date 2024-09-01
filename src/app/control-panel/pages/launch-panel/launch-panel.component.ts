import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-launch-panel',
  templateUrl: './launch-panel.component.html',
  styleUrls: ['./launch-panel.component.scss'],
})
export class LaunchPanelComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  constructor() {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    this.sidenav.open();
  }
}
