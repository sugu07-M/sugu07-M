<ejs-accumulationchart id="chart-container">
  <e-accumulation-series-collection>
      <e-accumulation-series [dataSource]='data' innerRadius = "70%" xName='x' yName='y' type='Pie'></e-accumulation-series>
  </e-accumulation-series-collection>
</ejs-accumulationchart>  html

import { AccumulationChartModule, PieSeriesService } from '@syncfusion/ej2-ng-charts';














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


PS D:\IT-Portal\IT-Portal\IT-Portal.UI>  npm install --save @syncfusion/ej2-angular-charts
npm WARN cleanup Failed to remove some directories [
npm WARN cleanup   [
npm WARN cleanup     'D:\\IT-Portal\\IT-Portal\\IT-Portal.UI\\node_modules\\@rollup\\.rollup-win32-x64-msvc-SXhgBDWa',
npm WARN cleanup     [Error: EPERM: operation not permitted, unlink 'D:\IT-Portal\IT-Portal\IT-Portal.UI\node_modules\@rollup\.rollup-win32-x64-msvc-SXhgBDWa\rollup.win32-x64-msvc.node'] {
npm WARN cleanup       errno: -4048,
npm WARN cleanup       code: 'EPERM',
npm WARN cleanup       syscall: 'unlink',
npm WARN cleanup       path: 'D:\\IT-Portal\\IT-Portal\\IT-Portal.UI\\node_modules\\@rollup\\.rollup-win32-x64-msvc-SXhgBDWa\\rollup.win32-x64-msvc.node'
npm WARN cleanup     }
npm WARN cleanup   ]
npm WARN cleanup ]

removed 52 packages, changed 54 packages, and audited 948 packages in 1m

120 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities





npm cache clean --force
rm -rf node_modules
npm install
npm install -g npm@latest

