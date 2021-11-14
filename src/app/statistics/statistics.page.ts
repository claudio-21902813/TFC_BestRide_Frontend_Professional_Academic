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
  @ViewChild('barChart') barChart;
  @ViewChild('lineChart') lineChart;
  @ViewChild('pieChart') pieChart;
  bars: any;
  lines: any;
  pie: any;
  private colorArray: Array<any>;

  constructor(private translate: CustomTranslateService) {}

  ngOnInit() {}

  ionViewDidEnter() {
    this.createBarChart();
    this.createLineChart();
    this.createPieChart();
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

  async createBarChart() {
    let label = '';
    await this.translate.translateType('Winnings by Day').then((res) => {
      label = res;
    });

    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'horizontalBar',
      data: {
        labels: [
          '01/11/2021',
          '02/11/2021',
          '03/11/2021',
          '04/11/2021',
          '05/11/2021',
          '06/11/2021',
          '07/11/2021',
        ],
        datasets: [
          {
            label: label,
            data: [40, 45, 50, 53, 54, 64, 70, 56],
            backgroundColor: '#58a600',
            borderColor: '#58a600',
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
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }

  async createLineChart() {
    let label = '';
    await this.translate.translateType('Winnings by Day').then((res) => {
      label = res;
    });

    this.bars = new Chart(this.lineChart.nativeElement, {
      type: 'line',
      data: {
        labels: [
          '01/11/2021',
          '02/11/2021',
          '03/11/2021',
          '04/11/2021',
          '05/11/2021',
          '06/11/2021',
          '07/11/2021',
        ],
        datasets: [
          {
            label: label,
            data: [40, 45, 50, 53, 54, 64, 70, 56],
            backgroundColor: '#ff3f00',
            borderColor: '#ff3f00',
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
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }

  async createPieChart() {
    let label = '';
    await this.translate.translateType('Winnings by Day').then((res) => {
      label = res;
    });

    this.bars = new Chart(this.pieChart.nativeElement, {
      type: 'pie',
      data: {
        labels: [
          '01/11/2021',
          '02/11/2021',
          '03/11/2021',
          '04/11/2021',
          '05/11/2021',
          '06/11/2021',
          '07/11/2021',
        ],
        datasets: [
          {
            label: label,
            data: [40, 45, 50, 53, 54, 64, 70, 56],
            backgroundColor: '#00adff',
            borderColor: '#00adff',
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
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }
}
