 public doughnutChartLabels: string[] = ['Part 1', 'Part 2', 'Part 3'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType: string = 'doughnut';

  public chartHovered(event: any): void {
    if (event.active.length > 0) {
      const chartData = event.active[0]._chart.data.datasets[0].data;
      const hoveredPartIndex = event.active[0]._index;
      const hoveredPartValue = chartData[hoveredPartIndex];
      console.log(`Hovered Part: ${this.doughnutChartLabels[hoveredPartIndex]} - Value: ${hoveredPartValue}`);
    }
  }


<canvas baseChart
        [data]="doughnutChartData"
        [labels]="doughnutChartLabels"
        [chartType]="doughnutChartType"
        (chartHover)="chartHovered($event)">
</canvas>




