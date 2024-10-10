import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { 
  FormControl, 
  FormGroup, 
  ReactiveFormsModule 
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { 
  MatTab, 
  MatTabGroup 
} from '@angular/material/tabs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormFieldModule, 
    MatInputModule, 
    MatCardModule, 
    MatTabGroup, 
    MatTab, 
    MatButtonModule, 
    MatIconModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  hidePassword = true;
  hideSignupPassword = true;

  loginForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  signupForm = new FormGroup({
    login: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  })

  togglePasswordVisibility() {

  }

  onLoginSubmit() {
    
  }

  onSignupSubmit() {

  }
}
