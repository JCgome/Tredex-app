import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Angel', weight: 1.0079, date: '02/01/2025' },
  { position: 2, name: 'Luis', weight: 4.0026, date: '02/01/2025' },
  { position: 3, name: 'Sara', weight: 6.941, date: '02/01/2025' },
  { position: 4, name: 'Elena', weight: 9.0122, date: '02/01/2025' },
  { position: 5, name: 'Rafael', weight: 10.811, date: '02/01/2025' },
  { position: 6, name: 'Miguel', weight: 12.0107, date: '02/01/2025' },
  { position: 7, name: 'Gonzalo', weight: 14.0067, date: '02/01/2025' },
  { position: 8, name: 'Carlos', weight: 15.9994, date: '02/01/2025' },
  { position: 9, name: 'Pilar', weight: 18.9984, date: '02/01/2025' },
  { position: 10, name: 'Ana', weight: 20.1797, date: '02/01/2025' },
];
@Component({
  selector: 'app-last-content',
  templateUrl: './last-content.component.html',
  styleUrls: ['./last-content.component.scss'],
})
export class LastContentComponent implements OnInit {
  tableColumns = [
    {
      columnDef: 'position',
      header: 'Order',
      cell: (element: PeriodicElement) => `${element.position}`,
    },
    {
      columnDef: 'name',
      header: 'Cliente',
      cell: (element: PeriodicElement) => `${element.name}`,
    },
    {
      columnDef: 'Fecha',
      header: 'Date',
      cell: (element: PeriodicElement) => `${element.date}`,
    },
    {
      columnDef: 'Total',
      header: 'Weight',
      cell: (element: PeriodicElement) => `${element.weight}`,
    },
  ];

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  ngOnInit(): void {}
}
