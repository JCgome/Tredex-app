import { ApiServiceService } from './../../../shared/services/api-service.service';
import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/core/interfaces/product.interface';

@Component({
  selector: 'app-products-panel',
  templateUrl: './products-panel.component.html',
  styleUrls: ['./products-panel.component.scss'],
})
export class ProductsPanelComponent implements OnInit {
  data: Product[] = [];

  constructor(private ApiServiceService: ApiServiceService) {}

  ngOnInit(): void {
    this.ApiServiceService.getDataProduct().subscribe((data: Product[]) => {
      this.data = data;
    });
  }
}
