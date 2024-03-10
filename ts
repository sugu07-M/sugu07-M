import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class DonutChartComponent implements OnInit {
  public doughnutChartLabels: Label[] = ['Red', 'Green', 'Blue'];
  public doughnutChartData: ChartDataSets[] = [
    { data: [300, 200, 100], backgroundColor: ['#ff6384', '#36a2eb', '#ffce56'] }
  ];
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }
}
