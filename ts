Severity	Code	Description	Project	File	Line	Suppression State
Warning	TS6385	(TS) '(next?: ((value: Object) => void) | null | undefined, error?: ((error: any) => void) | null | undefined, complete?: (() => void) | null | undefined): Subscription' is deprecated.	D:\IT-Portal\IT-Portal\IT-Portal.UI\tsconfig.json	D:\IT-Portal\IT-Portal\IT-Portal.UI\src\app\dashboard\dashboard.component.ts	60	Active



// Import required modules
import { Component } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent {
  // Define chart type
  public doughnutChartType: ChartType = 'doughnut';

  // Define chart data
  public doughnutChartData: ChartDataSets[] = [
    { data: [350, 450, 100], label: 'Donut Chart' }
  ];

  // Define chart labels
  public doughnutChartLabels: Label[] = ['Red', 'Green', 'Blue'];

  // Define chart options
  public doughnutChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
}
