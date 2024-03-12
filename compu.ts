import {
  ApexAxisChartSeries,ApexChart,ChartComponent,ApexDataLabels,ApexPlotOptions,ApexYAxis,ApexLegend,ApexStroke,
ApexTitleSubtitle,ApexXAxis,ApexTooltip,ApexFill,ApexStates} from "ng-apexcharts";


tooltip: {
  shared: false,
  y: {
    formatter: function (val) {
      return val + "K";
    }
  }
},

 [ERROR] NG2: Type 'ApexTitleSubtitle | undefined' is not assignable to type 'ApexTitleSubtitle'.
  Type 'undefined' is not assignable to type 'ApexTitleSubtitle'. [plugin angular-compiler]

    src/app/dashboard/dashboard.component.html:277:20:
      277 │                    [title]="chartOptions.title"></apx-chart>
          ╵                     ~~~~~

  Error occurs in the template of component DashboardComponent.

    src/app/dashboard/dashboard.component.ts:27:15:
      27 │   templateUrl: './dashboard.component.html',
         ╵                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
