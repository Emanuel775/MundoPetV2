import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { HeaderComponent } from '../../components/shared/header/header.component';
import { FooterComponent } from '../../components/shared/footer/footer.component';

@Component({
  selector: 'app-contact',
  imports: [
      HeaderComponent,
      FooterComponent,
      ReactiveFormsModule
    ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      confirmarCorreo: ['', [Validators.required, Validators.email]],
      ciudad: ['', Validators.required],
      barrio: ['', Validators.required],
      telefono: ['', Validators.required],
      esMovil: [false],
      asunto: ['', Validators.required],
      comentarios: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log('Formulario enviado:', this.contactForm.value);
    } else {
      console.log('El formulario no es válido.');
    }
  }
}
