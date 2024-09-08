import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nav-home',
  templateUrl: './nav-home.component.html',
  styleUrls: ['./nav-home.component.scss'],
})
export class NavHomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goPanel() {
    this.router.navigate(['panel']);
  }
}
