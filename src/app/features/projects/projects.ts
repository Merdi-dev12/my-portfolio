import { Component, OnInit, signal, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// On enregistre le plugin directement depuis l'objet gsap
gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
})
export class ProjectsComponent implements AfterViewInit {
  // On utilise des images Unsplash pour le moment
  projects = signal([
    {
      title: 'ArtFusion Marketplace',
      category: 'Web3 / Solidity',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000',
      featured: true
    },
    {
      title: 'Limmer Mobile',
      category: 'Flutter / Dart',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000'
    },
    {
      title: 'SaaS Dashboard',
      category: 'Angular / Supabase',
      image: 'https://images.unsplash.com/photo-1551288049-bbbda5366392?q=80&w=1000'
    },
    {
      title: 'E-commerce API',
      category: 'Laravel / MySQL',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000'
    }
  ]);

  ngAfterViewInit() {
    this.initAnimations();
  }

  initAnimations() {
    // Animation d'entrée des cartes (Stagger effect)
    gsap.from('.project-card', {
      scrollTrigger: {
        trigger: '#project-grid',
        start: 'top 80%',
      },
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: 'power3.out'
    });
  }
}
