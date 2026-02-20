import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: "./hero.html"
})
export class Hero implements AfterViewInit {
  ngAfterViewInit() {
    const tl = gsap.timeline();

    tl.to('.hero-sub', { opacity: 1, y: 0, duration: 0.5 })
      .from('.hero-title', {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: 'expo.out'
      }, "-=0.3")
      .from('.hero-desc', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      }, "-=0.8");
  }
}
