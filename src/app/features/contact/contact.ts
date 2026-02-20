import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Supabase } from '../../core/services/supabase';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact.html'
})
export class Contact {
  private fb = inject(FormBuilder);
  public supabaseService = inject(Supabase); // On injecte le service

  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    projectType: ['Web App'],
    budget: [5000],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  async onSubmit() {
    if (this.contactForm.valid) {
      const result = await this.supabaseService.sendContactMessage(this.contactForm.value);

      if (result.success) {
        alert('🚀 Message reçu ! Je vous répondrai sous 24h.');
        this.contactForm.reset({ budget: 5000, projectType: 'Web App' });
      } else {
        alert('Erreur lors de l\'envoi. Vérifiez votre connexion.');
      }
    }
  }
}
