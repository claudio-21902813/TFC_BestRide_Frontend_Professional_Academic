import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';

import { Chart } from 'chart.js';
import { reduce } from 'rxjs/operators';
import { CustomTranslateService } from '../shared/services/custom-translate.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.page.html',
  styleUrls: ['./statistics.page.scss'],
})
export class StatisticsPage implements OnInit {
  @ViewChild('tripsPerDayChart') tripsDayChart;
  @ViewChild('moneyPerDay') moneyDayChart;

  bars: any;
  lines: any;
  pie: any;
  private colorArray: Array<any>;

  constructor(private translate: CustomTranslateService) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.createWinningDayChart();
    this.createTripsByDarChart();
  }

  ngAfterViewInit() {}

  generateColorArray(num) {
    this.colorArray = [];
    for (let i = 0; i < num; i++) {
      this.colorArray.push(
        '#' + Math.floor(Math.random() * 16777215).toString(16)
      );
    }
  }

  async createWinningDayChart() {
    let label = '';
    await this.translate.translateType('Winnings by Day').then((res) => {
      label = res;
    });

    this.generateColorArray(5);
    this.bars = new Chart(this.moneyDayChart.nativeElement, {
      type: 'horizontalBar',
      data: {
        labels: [
          '21/02/2021',
          '22/02/2021',
          '23/02/2021',
          '24/02/2021',
          '25/02/2021',
        ],
        datasets: [
          {
            label: label,
            data: [50, 20, 45, 12],
            backgroundColor: this.colorArray,
            borderColor: this.colorArray,
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            labels: {
              // This more specific font property overrides the global property
              font: {
                size: 16,
              },
            },
          },
        },
      },
    });
  }

  async createTripsByDarChart() {
    let label = '';
    await this.translate.translateType('Trips made by Day').then((res) => {
      label = res;
    });

    this.generateColorArray(5);
    this.bars = new Chart(this.tripsDayChart.nativeElement, {
      type: 'horizontalBar',
      data: {
        labels: [
          '21/02/2021',
          '22/02/2021',
          '23/02/2021',
          '24/02/2021',
          '25/02/2021',
        ],
        datasets: [
          {
            label: label,
            data: [10, 12, 5, 8, 2],
            backgroundColor: this.colorArray,
            borderColor: this.colorArray,
            borderWidth: 1,
          },
        ],
      },
      options: {
        plugins: {
          legend: {
            labels: {
              // This more specific font property overrides the global property
              font: {
                size: 16,
              },
            },
          },
        },
      },
    });
  }
}
