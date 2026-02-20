import { Injectable, signal } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { secrets } from '../../core/constants/secrets';

@Injectable({
  providedIn: 'root'
})
export class Supabase {
  private supabase: SupabaseClient;

  // Signal pour suivre l'état d'envoi (utile pour l'UI)
  isSubmitting = signal(false);

  constructor() {
    this.supabase = createClient(secrets.supabaseUrl, secrets.supabaseKey);
  }

  async sendContactMessage(formData: any) {
    this.isSubmitting.set(true);
    try {
      const { data, error } = await this.supabase
        .from('messages') // Nom de ta table Supabase
        .insert([
          {
            name: formData.name,
            email: formData.email,
            project_type: formData.projectType,
            budget: formData.budget,
            message: formData.message,
            created_at: new Date()
          }
        ]);

      if (error) throw error;
      return { success: true };
    } catch (err) {
      console.error('Erreur Supabase:', err);
      return { success: false, error: err };
    } finally {
      this.isSubmitting.set(false);
    }
  }
}
