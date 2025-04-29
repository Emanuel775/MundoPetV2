import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Injectable, PLATFORM_ID, Inject} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
  ],
  standalone: true, 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MundoPet';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      // Al recargar o salir de la página se borra el usuario del localStorage
      window.addEventListener('beforeunload', () => {
        localStorage.removeItem('usuario');
      });
    }


  }
}
