// Import required modules
import { Component } from '@angular/core';
import { ChartOptions, ChartType, PluginOptionsByType } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';

// Define a custom interface extending ChartOptions to include datalabels property
interface CustomChartOptions extends ChartOptions {
  plugins?: {
    datalabels?: {
      anchor: string;
      align: string;
    };
  };
}

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent {
  // Define chart type
  public doughnutChartType: ChartType = 'doughnut';

  // Define chart data
  public doughnutChartData: SingleDataSet = [350, 450, 100];

  // Define chart labels
  public doughnutChartLabels: Label[] = ['Red', 'Green', 'Blue'];

  // Define chart options
  public doughnutChartOptions: CustomChartOptions = {
    responsive: true,
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
}
