import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { LucideAngularModule, MessageCircle, Send, Github, Mail, ExternalLink, Briefcase } from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled'
      })
    ),
    provideClientHydration(withEventReplay()),
    importProvidersFrom(
      LucideAngularModule.pick({ MessageCircle, Send, Github, Mail, ExternalLink, Briefcase })
    )
  ]
};
