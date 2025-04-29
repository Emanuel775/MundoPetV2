import {Component} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router, RouterModule} from '@angular/router';
import {Injectable, PLATFORM_ID, Inject} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-auth',
  imports: [
    ReactiveFormsModule,RouterModule
  ],
  templateUrl: './auth.component.html',
  standalone: true,
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              @Inject(PLATFORM_ID) private platformId: Object) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('usuario', this.loginForm.value.username);
    }
    if (this.loginForm.value.username === 'admin') {
      this.router.navigate(['/admin']);
    } else {
      this.router.navigate(['/home']);
    }
  }
}
