import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Category, Product } from 'src/app/core/interfaces/product.interface';
import { ApiServiceService } from './../../../shared/services/api-service.service';
@Component({
  selector: 'app-catalog-panel',
  templateUrl: './catalog-panel.component.html',
  styleUrls: ['./catalog-panel.component.scss'],
})
export class CatalogPanelComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  data: Product[] = [];

  constructor(private ApiServiceService: ApiServiceService) {}

  ngOnInit(): void {
    this.ApiServiceService.getDataProduct().subscribe((data: Product[]) => {
      this.data = this.categoryProduct(data);
    });
  }
  ngAfterViewInit() {
    this.sidenav.open();
  }

  private categoryProduct(data: Product[]): Product[] {
    const uniqueCategories = new Map<Category, Product>();
    for (const product of data) {
      if (!uniqueCategories.has(product.category)) {
        uniqueCategories.set(product.category, product);
      }
      if (uniqueCategories.size === 4) {
        break;
      }
    }
    return Array.from(uniqueCategories.values());
  }
}
