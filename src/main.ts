import 'zone.js';
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app'; // Vérifie le chemin vers ton composant App
import { appConfig } from './app/app.config';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
