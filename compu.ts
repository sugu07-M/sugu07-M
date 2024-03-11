import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'chartdemo';
  public piedata?: Object[];
  public legendSettings?: Object;
  public centerLabel?: Object;
  public centerLabelData: Object = [
      { x: 'Chrome', y: 61.3, text: 'Chrome: 61.3%' },
      { x: 'Safari', y: 24.6, text: 'Safari: 24.6%' },
      { x: 'Firefox', y: 0, text: 'Firefox: 0%' },
      { x: 'Samsung Internet', y: 0, text: 'Samsung Internet: 0%' },
      { x: 'Edge', y: 5.0, text: 'Edge: 5.00%' },
      // { x: 'Others', y: 3.6, text: 'Others: 3.6%' }
  ];
  ngOnInit(): void {
      this.legendSettings = {
          visible: false
      };
      this.centerLabel = {
          text: 'Mobile<br>Browsers<br>Statistics',
          hoverTextFormat: '${point.x} <br> Browser Share <br> ${point.y}%'
      }
  }
}
