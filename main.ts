import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';

import 'zone.js';
enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);
#chart-container {
    width: 50%; /* Set the width to 100% */
    height: 350px; /* Set the height to 400 pixels */
    box-sizing: border-box;
  }
  
  /* Custom styles for the center label */
  .ej2-accumulation-title {
    font-size: 20px; /* Increase font size */
    font-weight: bold; /* Make text bold */
    color: #333; /* Set text color */
  }
