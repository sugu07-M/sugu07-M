Severity	Code	Description	Project	File	Line	Suppression State
Error	TS2322	(TS) Type '{ datalabels: { anchor: string; align: string; }; }' is not assignable to type '_DeepPartialObject<PluginOptionsByType<keyof ChartTypeRegistry>>'.
  Object literal may only specify known properties, and 'datalabels' does not exist in type '_DeepPartialObject<PluginOptionsByType<keyof ChartTypeRegistry>>'.	D:\IT-Portal\IT-Portal\IT-Portal.UI\tsconfig.json	D:\IT-Portal\IT-Portal\IT-Portal.UI\src\app\dashboard\dashboard.component.ts	149	Active
Severity	Code	Description	Project	File	Line	Suppression State
Error	TS2304	(TS) Cannot find name 'Label'.	D:\IT-Portal\IT-Portal\IT-Portal.UI\tsconfig.json	D:\IT-Portal\IT-Portal\IT-Portal.UI\src\app\dashboard\dashboard.component.ts	140	Active
Severity	Code	Description	Project	File	Line	Suppression State
Error	TS2304	(TS) Cannot find name 'ChartDataSets'.	D:\IT-Portal\IT-Portal\IT-Portal.UI\tsconfig.json	D:\IT-Portal\IT-Portal\IT-Portal.UI\src\app\dashboard\dashboard.component.ts	135	Active

import { ChartOptions } from 'chart.js';
import { Label, SingleDataSet } from 'ng2-charts';

interface CustomChartOptions extends ChartOptions {
  datalabels?: {
    anchor: string;
    align: string;
  };
}

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





import { Label, SingleDataSet } from 'ng2-charts';

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
