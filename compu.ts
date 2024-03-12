import { ChartData } from 'chart.js';

// Assuming ChartData type is imported from 'chart.js'

public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
public doughnutChartData: ChartData<'doughnut', number[], string> = {
  labels: this.doughnutChartLabels,
  datasets: [
    {
      data: [350, 450, 100],
      backgroundColor: ['red', 'blue', 'green']
    }
  ]
};
public doughnutChartType: any = 'doughnut';

// events
public changeData(): void {
  this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'google Sales', 'TianMao Sales'];
  this.doughnutChartData = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [350, 450, 100, 80, 90],
        backgroundColor: ['red', 'blue', 'green', 'yellow', 'orange']
      }
    ]
  };
}
