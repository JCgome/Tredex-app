import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Tracked } from 'src/app/core/interfaces/tracked.interface';
import { ApiServiceService } from '../../../../shared/services/api-service.service';

@Component({
  selector: 'app-more-detail-sales',
  templateUrl: './more-detail-sales.component.html',
  styleUrls: ['./more-detail-sales.component.scss'],
})
export class MoreDetailSalesComponent implements OnInit {
  sales: Tracked | null = null;
  isLoading = false;

  constructor(private apiService: ApiServiceService, private router: Router) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.apiService.getDataTracked().subscribe(
      (data: Tracked[]) => {
        this.sales = data[0];
        this.isLoading = false;
      },
      (error) => {
        console.error('Error al obtener los datos', error);
        this.isLoading = false;
      }
    );
  }

  onClose() {
    this.router.navigate(['panel/sales']);
  }
}
