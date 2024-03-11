// your-component.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-your-component',
  templateUrl: './your-component.component.html',
  styleUrls: ['./your-component.component.css']
})
export class YourComponent {

  doughnutChartLabels: string[] = ['Label 1', 'Label 2', 'Label 3'];
  doughnutChartData: number[] = [350, 450, 100];
  doughnutChartType: string = 'doughnut';
  doughnutChartOptions: any = {
    responsive: true
  };
  doughnutChartColors: any[] = [
    {
      backgroundColor: ['rgba(255, 0, 0, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(0, 0, 255, 0.5)'],
    }
  ];

}
