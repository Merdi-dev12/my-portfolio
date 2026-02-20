import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { secrets } from '../../core/constants/secrets';

@Injectable({ providedIn: 'root' })
export class MailService {
  async sendEmail(formData: any) {
    try {
      return await emailjs.send(
        secrets.emailjsServiceId,
        secrets.emailjsTemplateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          project_type: formData.projectType,
          budget: formData.budget,
          message: formData.message,
          to_name: 'Ton Nom',
        },
        secrets.emailjsPublicKey
      );
    } catch (error) {
      console.error('Erreur EmailJS:', error);
      throw error;
    }
  }
}
