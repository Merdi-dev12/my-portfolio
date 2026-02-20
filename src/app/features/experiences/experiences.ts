import { Component, signal, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';
import { gsap } from 'gsap';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  template: "./experiences.html"
})
export class ExperienceComponent implements AfterViewInit {
  experiences = signal([
    {
      period: '2023 — Présent',
      role: 'Lead Fullstack Developer',
      company: 'Tech Innovate',
      desc: 'Architecture de solutions SaaS complexes sous Angular et Django. Gestion des micro-services avec Supabase.',
      tags: ['Angular', 'Django', 'PostgreSQL']
    },
    {
      period: '2021 — 2023',
      role: 'Mobile & Web3 Engineer',
      company: 'CryptoFlow',
      desc: 'Développement d’applications mobiles bancaires avec Flutter et intégration de Smart Contracts Solidity.',
      tags: ['Flutter', 'Solidity', 'Dart']
    },
    {
      period: '2019 — 2021',
      role: 'Backend Developer',
      company: 'Startup Studio',
      desc: 'Conception d’APIs robustes avec Laravel et AdonisJS. Optimisation de bases de données MySQL.',
      tags: ['Laravel', 'AdonisJS', 'MySQL']
    }
  ]);

  ngAfterViewInit() {
    gsap.from('.exp-card', {
      scrollTrigger: {
        trigger: '#experience',
        start: 'top 70%',
      },
      x: -50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: 'power2.out'
    });
  }
}
