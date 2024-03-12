 public doughnutChartLabels: string[] = ['Part 1', 'Part 2', 'Part 3'];
  public doughnutChartData: ChartDataSets[] = [
    { data: [350, 450, 100], backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'] }
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public chartOptions: any = {
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          var label = data.labels[tooltipItem.index] || '';
          if (label) {
            label += ': ';
          }
          label += tooltipItem.yLabel;
          return label;
        }
      },
      bodyFontFamily: 'Arial',
      bodyFontSize: 14,
      bodyFontStyle: 'normal',
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      titleFontColor: '#ffffff',
      bodyFontColor: '#ffffff',
      cornerRadius: 4,
      displayColors: false,
      xPadding: 10,
      yPadding: 10,
      caretSize: 8,
      caretPadding: 10,
      mode: 'index',
      intersect: false
    }
  };

  public chartHovered(event: any): void {
    // Handle hover event if needed
  }

<div>
  <canvas
    baseChart
    [data]="doughnutChartData"
    [labels]="doughnutChartLabels"
    [options]="chartOptions"
    [type]="doughnutChartType"
    (chartHover)="chartHovered($event)">
  </canvas>
</div>



X [ERROR] NG2: Type 'any[]' is not assignable to type 'ChartData<any, any[], string>'. [plugin angular-compiler]

    src/app/dashboard/dashboard.component.html:255:11:
      255 │           [data]="doughnutChartData"
          ╵            ~~~~

  Error occurs in the template of component DashboardComponent.

    src/app/dashboard/dashboard.component.ts:11:15:
      11 │   templateUrl: './dashboard.component.html',

