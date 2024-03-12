import { ChartData } from 'chart.js';
 public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
 public doughnutChartData: number[] = [350, 450, 100];
 public doughnutChartType: string = 'doughnut';

 // events
 public changeData(): void {
   this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'google Sales', 'TianMao Sales'];
   this.doughnutChartData = [350, 450, 100, 80, 90];
 }



<canvas baseChart [data]="doughnutChartData" [labels]="doughnutChartLabels" [chartType]="'doughnut'"></canvas>
X [ERROR] NG8002: Can't bind to 'chartType' since it isn't a known property of 'canvas'. [plugin angular-compiler]

    src/app/dashboard/dashboard.component.html:253:76:
      253 │ ...[labels]="doughnutChartLabels" [chartType]="'doughnut'"></canvas>
          ╵                                   ~~~~~~~~~~~~~~~~~~~~~~~~

  Error occurs in the template of component DashboardComponent.

    src/app/dashboard/dashboard.component.ts:11:15:
      11 │   templateUrl: './dashboard.component.html',
