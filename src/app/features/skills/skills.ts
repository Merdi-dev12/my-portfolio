import { Component, AfterViewInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: "./skills.html"
})
export class Skills implements AfterViewInit {
  skills = signal([
    'Angular', 'ReactJS', 'Flutter', 'Laravel', 'Adonis', 'Django',
    'TailwindCSS', 'Three.js', 'Solidity', 'Supabase', 'Python', 'Dart'
  ]);

  ngAfterViewInit() {
    gsap.from('.skill-badge', {
      scrollTrigger: {
        trigger: '#skills',
        start: 'top 80%',
      },
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
      stagger: {
        each: 0.05,
        from: "center"
      },
      ease: 'back.out(1.7)'
    });
  }
}
