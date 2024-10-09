import { ApiServiceService } from './../../../shared/services/api-service.service';
import { Component, OnInit } from '@angular/core';
import { Tracked } from 'src/app/core/interfaces/tracked.interface';

@Component({
  selector: 'app-sales-panel',
  templateUrl: './sales-panel.component.html',
  styleUrls: ['./sales-panel.component.scss'],
})
export class SalesPanelComponent implements OnInit {
  data: Tracked[] = [];

  constructor(private ApiServiceService: ApiServiceService) {}

  ngOnInit(): void {
    this.ApiServiceService.getDataTracked().subscribe((data: Tracked[]) => {
      this.data = data;
      console.log(data);
    });
  }
}
