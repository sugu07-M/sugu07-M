 public doughnutChartLabels: string[] = ['Part 1', 'Part 2', 'Part 3'];
  public doughnutChartData: any[] = [
    { data: [350, 450, 100], backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], type: 'doughnut' }
  ];

  public chartHovered(event: any): void {
    if (event.active.length > 0) {
      const chartData = event.active[0]._chart.data.datasets[0].data;
      const hoveredPartIndex = event.active[0]._index;
      const hoveredPartValue = chartData[hoveredPartIndex];
      console.log(`Hovered Part: ${this.doughnutChartLabels[hoveredPartIndex]} - Value: ${hoveredPartValue}`);
    }
  }


<div>
  <canvas
    baseChart
    [data]="doughnutChartData"
    [labels]="doughnutChartLabels"
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

