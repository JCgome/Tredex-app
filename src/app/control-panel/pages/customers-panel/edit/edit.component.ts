import { ApiServiceService } from './../../../../shared/services/api-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client, Result } from 'src/app/core/interfaces/client.interface';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  dataSource: Result[] = [];
  user: Result | null = null;
  isLoading = false;

  constructor(
    private ApiServiceService: ApiServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ApiServiceService.getData().subscribe((data: Client) => {
      this.dataSource = data.results;
      if (this.dataSource.length > 0) {
        this.user = this.dataSource[0];
      }
    });
  }

  getFullName(element: any): string {
    return `${element.name.title} ${element.name.first} ${element.name.last}`;
  }

  goBack() {
    this.router.navigate(['panel/client']);
  }

  showError = false;

  error() {
    this.showError = true;
    setTimeout(() => {
      this.showError = false;
    }, 5000);
  }

  goSave() {
    this.isLoading = true;
    setTimeout(() => {
      this.router.navigate(['panel/client']);
      this.isLoading = false;
    }, 2000);
  }
}
