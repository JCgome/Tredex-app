import { ApiServiceService } from './../../../shared/services/api-service.service';
import { Component, OnInit } from '@angular/core';
import { Client, Result } from 'src/app/core/interfaces/client.interface';

@Component({
  selector: 'app-customers-panel',
  templateUrl: './customers-panel.component.html',
  styleUrls: ['./customers-panel.component.scss'],
})
export class CustomersPanelComponent implements OnInit {
  dataSource: Result[] = [];

  constructor(private ApiServiceService: ApiServiceService) {}

  ngOnInit(): void {
    this.ApiServiceService.getData().subscribe((data: Client) => {
      this.dataSource = data.results;
    });
  }

  getFullName(element: any): string {
    return `${element.name.title} ${element.name.first} ${element.name.last}`;
  }
}
