import { Component, OnInit } from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { GetCurrentStatus } from 'src/app/models/interfaces/status/response/GetCurrentStatus';
import { DashboardService } from 'src/app/services/dashboard.service';
import { StatusService } from 'src/app/services/status/status.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {

  public statusList: Array<GetCurrentStatus> = [];

  public statusChartDatas!: ChartData;
  public statusChartOptions!: ChartOptions;

  constructor(private statusService: StatusService) { }

  ngOnInit(): void {
    this.getStatusUf();
    this.setStatusChartConfig();
  }

  getStatusUf(): void {
    this.statusService.getAllStatus().subscribe({
      next: (response) => {
        if (response.length > 0) {
          this.statusList = response;
        }
      },
      error: (err) => {
        console.log(err);
      }
    },
    )
  }

  // getUf() {
  //   this.dashboardService.getUf().subscribe(result => {
  //     this.getUf = result;
  //     console.log(this.getUf);
  //   })
  // }

  setStatusChartConfig(): void {
    if (this.statusList.length > 0) {
      const documentStyle = getComputedStyle(document.documentElement)
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondadry');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

      this.statusChartDatas = {
        labels: this.statusList.map((element) => element?.uf),
        datasets: [
          {
            label: 'Quantidade',
            backgroundColor: documentStyle.getPropertyValue('--indigo-400'),
            borderColor: documentStyle.getPropertyValue('--indigo-400'),
            hoverBackgroundColor: documentStyle.getPropertyValue('--indigo-500'),
            data: this.statusList.map((element) => element?.id),
          },
        ]
      };

      this.statusChartOptions = {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
          legend: {
            labels: {
              color: textColor,
            },
          },
        },

        scales: {
          x: {
            ticks: {
              color: textColorSecondary,
              font: {
                weight: 'bold',
              },
            },
            grid: {
              color: surfaceBorder
            }
          },
          y: {
            ticks: {
              color: textColorSecondary
            },
            grid: {
              color: surfaceBorder
            },
          },
        },
      };
    }
  }
}
