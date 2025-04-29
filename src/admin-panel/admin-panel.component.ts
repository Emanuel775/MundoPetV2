import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-panel',
  imports: [],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})
export class AdminPanelComponent {
  constructor(private router:Router){}

  logout() {
    // limpiar datos del localStorage o sessionStorage si usas autenticación
    localStorage.clear();
    sessionStorage.clear();
  
    // Redirigir al login
    this.router.navigate(['/auth/login']);

  }
}
