import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;
  errorMessage = '';
  successMessage = '';

  constructor(private fb: FormBuilder, private loginService: LoginService) {
    // Inisialisasi form login
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    // Jika form tidak valid, jangan submit
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.errorMessage = '';
    this.successMessage = '';

    // Kirim data login ke API
    this.loginService.login(this.loginForm.value).subscribe({
      next: (response) => {
        console.log('Login berhasil:', response);
        this.successMessage = 'Login berhasil!';
        this.loading = false;
      },
      error: (err) => {
        console.error('Login gagal:', err);
        this.errorMessage = 'Login gagal, periksa email dan password Anda.';
        this.loading = false;
      },
    });
  }
}
