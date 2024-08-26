import { Injectable } from '@angular/core';

interface Country {
  name: string;
  value: number;
}

@Injectable({
  providedIn: 'root',
})
export class CountryAnaliticService {
  private data: Country[] = [
    {
      name: 'Alemania',
      value: 8940000,
    },
    {
      name: 'EEUU',
      value: 5000000,
    },
    {
      name: 'Francia',
      value: 7200000,
    },
    {
      name: 'España',
      value: 6200000,
    },
  ];

  get countryData() {
    return this.data;
  }
}
