public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
public doughnutChartData: number[] = [350, 450, 100];
public doughnutChartType: any = 'doughnut';

// events
public changeData(): void {
  this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'google Sales', 'TianMao Sales'];
  this.doughnutChartData = [350, 450, 100, 80, 90];
}
