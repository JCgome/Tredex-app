import { SecondCountryAnaliticService } from './../../../core/services/second-country-analitic.service';
import { CountryAnaliticService } from './../../../core/services/country-analitic.service';
import { Component } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-card-analitics',
  templateUrl: './card-analitics.component.html',
  styleUrls: ['./card-analitics.component.scss'],
})
export class CardAnaliticsComponent {
  view: [number, number] = [580, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';
  legend: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Años';
  yAxisLabel: string = 'Ventas';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  constructor(
    private CountryAnaliticService: CountryAnaliticService,
    private SecondCountryAnaliticService: SecondCountryAnaliticService
  ) {}

  get single() {
    return this.CountryAnaliticService.countryData;
  }

  get historieSales() {
    return this.SecondCountryAnaliticService.countryHistory;
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
