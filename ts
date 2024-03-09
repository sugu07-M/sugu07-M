<ejs-accumulationchart id="chart-container">
  <e-accumulation-series-collection>
      <e-accumulation-series [dataSource]='data' innerRadius = "70%" xName='x' yName='y' type='Pie'></e-accumulation-series>
  </e-accumulation-series-collection>
</ejs-accumulationchart>  html


//app.component.ts
 
import { Component } from '@angular/core';
export class AppComponent {
  public data: Object[] = [    
    { x: 'JPN', text: 'Japan', y: 5156 },
    { x: 'DEU', text: 'Germany', y: 3754  },
    { x: 'FRA', text: 'France', y: 2809 },
    { x: 'GBR', text: 'UK', y: 2721  },
    { x: 'BRA', text: 'Brazil', y: 2472  },
    { x: 'RUS', text: 'Russia', y: 2231 },
    { x: 'ITA', text: 'Italy', y: 2131  },
    { x: 'IND', text: 'India', y: 1857  },   
];
 npm install --save @syncfusion/ej2-angular-charts
}
 
import { AccumulationChartModule } from '@syncfusion/ej2-ng-charts';
import { PieSeriesService} from '@syncfusion/ej2-ng-charts';
import { AppComponent } from './app.component';
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, AccumulationChartModule
  ],
  providers: [PieSeriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }


TS-996001: Cannot declare 'ChartModule' in an NgModule as it's not a part of the current compilation.

