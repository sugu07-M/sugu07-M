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

X [ERROR] TS2564: Property 'chart' has no initializer and is not definitely assigned in the constructor. [plugin angular-compiler]

    src/app/dashboard/dashboard.component.ts:34:22:
      34 │   @ViewChild("chart") chart: ChartComponent;
         ╵                       ~~~~~
