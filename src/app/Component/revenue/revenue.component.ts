import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Chart, ChartConfiguration, registerables, ChartData, ChartOptions, CategoryScale } from 'chart.js';
Chart.register(...registerables);
Chart.register(CategoryScale);

@Component({
  selector: 'app-revenue',
  imports: [],
  templateUrl: './revenue.component.html',
  styleUrl: './revenue.component.css'
})
export class RevenueComponent implements AfterViewInit {
  @ViewChild('BarChart', { static: true }) chartCanvas!: ElementRef;

  ngAfterViewInit(): void {
    const ctx = this.chartCanvas.nativeElement as HTMLCanvasElement;

    const chartConfig: ChartConfiguration = {
      type: 'bar',
      data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
          label: 'Online Sales',
          data: [13000, 16000, 5000, 15000, 11000, 16000, 21000],
          barPercentage: 0.7,
          categoryPercentage: 0.5,
          backgroundColor: '#0095FF',
          borderRadius: 2
        },
        {
          label: 'Offline Sales',
          data: [12000, 11000, 22000, 6000, 10000, 12000, 10000],
          barPercentage: 0.7,
          categoryPercentage: 0.5,
          backgroundColor: '#00E096',
          borderRadius: 2
        },
      ]
      },
      options: {
        responsive: true,
        scales: {
          x:{   
            grid: {
              display: false
            },
            ticks:{
              font:{
                size: 11,
                family: 'Poppins'
              },
              color: '#7B91B0'
            }
          },
          y: {
            border: {
              display: false
              },   
            ticks: {
              callback: (value: number | string) => {
                if (typeof value === 'number') {
                  if (value >= 1000000) {
                    return value / 1000000 + 'M';
                  } else if (value >= 1000) {
                    return value / 1000 + 'k';
                  }
                }
                return value;
              },
              font: {
                size: 12,
                family: 'Poppins'
              },
              color: '#7B91B0',
              padding: 10
            }
          }
        },
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              pointStyle: 'circle',
              usePointStyle: true,
              font:{
                size:12,
                family: 'Open Sans'
              },
              color: '#222B45',
              padding: 20
            },
          }
        },
        layout: {
          padding: {
            top: 30,
            left: 22,
            bottom:22
          }
        }
      }
    };

    new Chart(ctx, chartConfig);
  }
}
