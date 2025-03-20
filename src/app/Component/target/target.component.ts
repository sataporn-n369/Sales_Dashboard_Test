import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Chart, ChartConfiguration, registerables, ChartData, ChartOptions, CategoryScale } from 'chart.js';
Chart.register(...registerables);
Chart.register(CategoryScale);

@Component({
  selector: 'app-target',
  imports: [],
  templateUrl: './target.component.html',
  styleUrl: './target.component.css'
})
export class TargetComponent implements AfterViewInit {
  @ViewChild('BarChart', { static: true }) chartCanvas!: ElementRef;

  ngAfterViewInit(): void {
    const ctx = this.chartCanvas.nativeElement as HTMLCanvasElement;

    const chartConfig: ChartConfiguration = {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July'],
        datasets: [{
          label: 'Relity Sales',
          data: [7.5, 6.4, 5.6, 7.3, 9.0, 9.0, 9.0],
          barPercentage: 0.8,
          categoryPercentage: 0.8,
          backgroundColor: '#4AB58E',
          borderRadius: {
            topLeft: 3,
            topRight: 3,
            bottomLeft: 3,
            bottomRight: 3
          }
        },
        {
          label: 'Targat Sales',
          data: [9.5, 8.0, 11.0, 8.7, 13.0, 13.0, 13.0],
          barPercentage: 0.8,
          categoryPercentage: 0.8,
          backgroundColor: '#FFCF00',
          borderRadius: {
            topLeft: 3,
            topRight: 3,
            bottomLeft: 3,
            bottomRight: 3
          }
        },
      ]
      },
      options: {
        responsive: true,
        scales: {
          x:{
            border: {
              display: false
              },   
            grid: {
              display: false,
              drawTicks: false
            },
            ticks:{
              font:{
                size: 11,
                family: 'Poppins'
              },
              color: '#7B91B0',
              padding: 10
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
            left: 16,
          }
        }
      }
    };

    new Chart(ctx, chartConfig);
  }
}
