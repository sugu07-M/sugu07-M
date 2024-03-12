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


       chartOptions: {
  // Assuming ApexTitleSubtitle is an interface or a class
  title: ApexTitleSubtitle = { text: 'Default Title', align: 'left' }
};
