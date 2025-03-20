import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Chart, ChartConfiguration, registerables, ChartData, ChartOptions, CategoryScale } from 'chart.js';
Chart.register(...registerables);
Chart.register(CategoryScale);

@Component({
  selector: 'app-volume',
  imports: [],
  templateUrl: './volume.component.html',
  styleUrl: './volume.component.css'
})
export class VolumeComponent implements AfterViewInit {
  @ViewChild('BarChart', { static: true }) chartCanvas!: ElementRef;

  ngAfterViewInit(): void {
    const ctx = this.chartCanvas.nativeElement as HTMLCanvasElement;

    const chartConfig: ChartConfiguration = {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
        datasets: [{
          label: 'Relity Sales',
          data: [6.0, 7.0, 3.0, 3.7, 3.0, 5.5],
          backgroundColor: '#00E096',
          barPercentage: 1.0,
          categoryPercentage: 1.0,
          barThickness: 12
        },
        {
          label: 'Targat Sales',
          data: [11.0, 14.0, 11.0, 10.0, 8.0, 9.0],
          backgroundColor: '#0095FF',
          barPercentage: 1.0,
          categoryPercentage: 1.0,
          borderRadius: 2,
          barThickness: 12
        },
      ]
      },
      options: {
        responsive: true,
        scales: {
          x:{
            stacked: true,
            display: false,
            grid:{
              offset: true
            }
          },
          y: {
            display: false
          }
        },
        plugins: {
          legend: {
            display: false
          }
        },
        layout: {
          padding: {
            top: 10,
            left: 30,
            right: 40
          }
        }
      }
    };

    new Chart(ctx, chartConfig);
  }
}
