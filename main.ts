import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';

import 'zone.js';
enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);
  node_modules/@syncfusion/ej2-navigations/index.js:4:14:
      4 │ export * from './src/index';
npm install @syncfusion/ej2-navigations@latest
rm -rf node_modules package-lock.json
npm install
/* app.component.css */

/* Add animation to the chart */
.ej2-chart {
  transition: all 0.3s ease-in-out;
}

/* Add border box and shadow to the chart container */
#chart-container {
  border: 1px solid #000;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

/* Customize legend styles */
.ej-svg-diagram .ej-text:only-child {
  fill: #000; /* Set legend text color */
}

/* Customize center label styles */
.ej2-circular-gauge .ej-circular-gauge .ej-svg-text-root {
  fill: #000; /* Set center label text color */
}
