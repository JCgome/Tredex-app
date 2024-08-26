import { Injectable } from '@angular/core';

interface Country {
  name: string;
  series: {
    name: string;
    value: number;
  }[];
}

@Injectable({
  providedIn: 'root',
})
export class SecondCountryAnaliticService {
  private history: Country[] = [
    {
      name: 'Asia',
      series: [
        {
          name: '2022',
          value: 62000000,
        },
        {
          name: '2023',
          value: 73000000,
        },
        {
          name: '2024',
          value: 89400000,
        },
      ],
    },

    {
      name: 'America',
      series: [
        {
          name: '2022',
          value: 250000000,
        },
        {
          name: '2023',
          value: 309000000,
        },
        {
          name: '2024',
          value: 311000000,
        },
      ],
    },

    {
      name: 'Europa',
      series: [
        {
          name: '2022',
          value: 58000000,
        },
        {
          name: '2023',
          value: 50000020,
        },
        {
          name: '2024',
          value: 58000000,
        },
      ],
    },
    {
      name: 'Oceania',
      series: [
        {
          name: '2023',
          value: 57000000,
        },
        {
          name: '2024',
          value: 62000000,
        },
      ],
    },
  ];

  get countryHistory() {
    return this.history;
  }
}
