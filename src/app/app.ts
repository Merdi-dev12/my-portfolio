import { Component, OnInit, inject, Renderer2 } from '@angular/core';
import { ProjectsComponent } from './features/projects/projects';
import { Hero } from './features/hero/hero';
import { Skills } from './features/skills/skills';
import { Contact } from './features/contact/contact';
import { Whatsapp } from './shared/components/whatsapp/whatsapp';
import { Header } from './layout/header/header';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProjectsComponent, Skills, Hero, Contact, Header, Whatsapp],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private renderer = inject(Renderer2);

  ngOnInit() {
    // 1. Initialisation de Lenis (Scroll Fluide)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    // 2. Curseur personnalisé GSAP
    this.initCustomCursor();
  }

  private initCustomCursor() {
    const cursor = document.getElementById('custom-cursor');
    if (!cursor) return;

    window.addEventListener('mousemove', (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    // Effet au survol des éléments cliquables
    const interactiveElements = document.querySelectorAll('button, a, .project-card');
    interactiveElements.forEach(el => {
      this.renderer.listen(el, 'mouseenter', () => {
        gsap.to(cursor, { scale: 2.5, backgroundColor: 'rgba(79, 70, 229, 0.1)', borderColor: 'rgb(79, 70, 229)' });
      });
      this.renderer.listen(el, 'mouseleave', () => {
        gsap.to(cursor, { scale: 1, backgroundColor: 'transparent', borderColor: 'rgb(79, 70, 229)' });
      });
    });
  }
}
