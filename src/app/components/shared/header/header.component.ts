import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Injectable, PLATFORM_ID, Inject} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  imports: [
    RouterLink
  ],
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  usuario: string | null = null;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object
  ) {

  }

  ngOnInit(): void {
    
    if (isPlatformBrowser(this.platformId)) {
      this.usuario = localStorage.getItem('usuario');
    }
  }
}
