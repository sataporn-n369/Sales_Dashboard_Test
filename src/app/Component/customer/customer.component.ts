import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Chart, ChartConfiguration, registerables, ChartData, ChartOptions, CategoryScale } from 'chart.js';
Chart.register(...registerables);
Chart.register(CategoryScale);

@Component({
  selector: 'app-customer',
  imports: [],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements AfterViewInit {
  @ViewChild('LineChart', { static: true }) chartCanvas!: ElementRef;

  ngAfterViewInit(): void {
    const ctx = this.chartCanvas.nativeElement as HTMLCanvasElement;
  
    const chartConfig: ChartConfiguration = {
      type: 'line',
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [{
          label: 'Relity Sales',
          data: [15, 14, 15, 13, 15.5, 11, 18],
          borderColor: '#05C283',
          backgroundColor: ( context: { chart: { chartArea: any; ctx?: any; data?: any; }; } )=>{
            const bgColor = ['rgba(31, 212, 112, 0.55)','rgba(34, 221, 118, 0.42)','rgba(255, 255, 255, 0)'];
            if(!context.chart.chartArea){
              return;
            }
            const { ctx, data, chartArea: {top,bottom} } = context.chart;
            const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
            gradientBg.addColorStop(0, bgColor[0]);
            gradientBg.addColorStop(0.5,bgColor[1]);
            gradientBg.addColorStop(1, bgColor[2]);
            return gradientBg;
          },
          fill: true,
          tension: 0.2, 
          pointRadius: 4,
          pointBackgroundColor: '#05C283'
        },
        {
          label: 'Targat Sales',
          data: [10, 12, 7, 7, 8, 8.5, 11.5],
          borderColor: '#007DD6',
          backgroundColor: ( context: { chart: { chartArea: any; ctx?: any; data?: any; }; } )=>{
            const bgColor = ['rgba(25, 130, 236, 0.45)','rgba(25, 130, 236, 0.53)','rgba(255, 255, 255, 0)'];
            if(!context.chart.chartArea){
              return;
            }
            const { ctx, data, chartArea: {top,bottom} } = context.chart;
            const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
            gradientBg.addColorStop(0, bgColor[0]);
            gradientBg.addColorStop(0.5,bgColor[1]);
            gradientBg.addColorStop(1,bgColor[2]);
            return gradientBg;
          },
          fill: true,
          tension: 0.2, 
          pointRadius: 4,
          pointBackgroundColor: '#007DD6'
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
            left: 20,
            right: 20
          }
        }
      }
    };

    new Chart(ctx, chartConfig);
  }
}
