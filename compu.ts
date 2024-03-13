import {
  ApexAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexXAxis,
  ApexStroke,
  ApexTooltip,
  ApexFill,
  ApexStates,
  ApexTitleSubtitle
} from "ng-apexcharts";

export type ChartOptions = {
  series?: ApexAxisChartSeries[] | ApexNonAxisChartSeries[];
  chart?: ApexChart;
  dataLabels?: ApexDataLabels;
  plotOptions?: ApexPlotOptions;
  yaxis?: ApexYAxis | ApexYAxis[];
  legend?: ApexLegend;
  xaxis?: ApexXAxis;
  stroke?: ApexStroke;
  tooltip?: ApexTooltip;
  fill?: ApexFill;
  states?: ApexStates;
  title?: ApexTitleSubtitle;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})

export class DashboardComponent implements OnInit {


  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  constructor(private http: HttpClient) {
    this.chartOptions = {
      series: [{
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
      }],
      chart: {
        type: 'line',
        height: 350
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
      },
      stroke: {
        curve: 'smooth'
      },
      tooltip: {
        enabled: true
      }
    }
  }
  
