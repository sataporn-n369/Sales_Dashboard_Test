import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Chart, ChartConfiguration, registerables, ChartData, ChartOptions, CategoryScale } from 'chart.js';
Chart.register(...registerables);
Chart.register(CategoryScale);

@Component({
  selector: 'app-visitor',
  imports: [],
  templateUrl: './visitor.component.html',
  styleUrl: './visitor.component.css'
})
export class VisitorComponent implements AfterViewInit{
  @ViewChild('LineChart', { static: true }) chartCanvas!: ElementRef;

  ngAfterViewInit(): void {
    const ctx = this.chartCanvas.nativeElement as HTMLCanvasElement;

    const chartConfig: ChartConfiguration = {
      type: 'line',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Sept", "Oct", "Nov", "Dec"],
        datasets: [{
          label: "Loyal Customers",
            data: [320, 310, 280, 250, 290, 330, 350, 340, 310, 290, 270],
            borderColor: '#A700FF',
            fill: false,
            tension: 0.5,
            borderWidth: 3,
            pointRadius: 0
          },
          {
            label: "New Customers",
            data: [300, 250, 200, 220, 260, 310, 400, 370, 320, 280, 260],
            borderColor: '#EF4444',
            fill: false,
            tension: 0.5,
            borderWidth: 3,
            pointRadius: 0
          },
          {
            label: "Unique Customers",
            data: [280, 300, 260, 230, 270, 320, 360, 350, 330, 300, 290],
            borderColor: '#3CD856',
            fill: false,
            tension: 0.5,
            borderWidth: 3,
            pointRadius: 0
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
            beginAtZero: true,
            border: {
              display: false
              },   
            ticks: {
              stepSize: 100,
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
            display: false
          }
        },
        layout: {
          padding: {
            top: 30,
            left: 22,
            right: 32,
            bottom:60
          }
        }
      }
    };

    new Chart(ctx, chartConfig);
  }
}
