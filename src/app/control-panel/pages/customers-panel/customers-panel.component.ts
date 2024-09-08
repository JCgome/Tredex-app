import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { ApiServiceService } from './../../../shared/services/api-service.service';
import { Component, OnInit } from '@angular/core';
import {
  MAT_TOOLTIP_DEFAULT_OPTIONS,
  MatTooltipDefaultOptions,
} from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { Client, Result } from 'src/app/core/interfaces/client.interface';

@Component({
  selector: 'app-customers-panel',
  templateUrl: './customers-panel.component.html',
  styleUrls: ['./customers-panel.component.scss'],
})
export class CustomersPanelComponent implements OnInit {
  dataSource: Result[] = [];
  showError = false;
  constructor(
    private ApiServiceService: ApiServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ApiServiceService.getData().subscribe((data: Client) => {
      this.dataSource = data.results;
    });
  }

  getFullName(element: any): string {
    return `${element.name.title} ${element.name.first} ${element.name.last}`;
  }

  goEdit() {
    this.router.navigate(['/edit']);
  }

  error() {
    this.showError = true;
    setTimeout(() => {
      this.showError = false;
    }, 5000);
  }
}
