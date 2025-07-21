import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import { Router, RouterEvent, RouterLink, RouterLinkActive, RouterLinkWithHref, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sign',
  standalone: false,
  templateUrl: './sign.component.html',
  styleUrl: './sign.component.scss'
})
export class SignComponent {

  userData = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  formSignUp = new FormGroup({
    username : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    confirmPassword: new FormControl('', []),
  }, [this.passMismatch])

  formSignIn = new FormGroup({
    username : new FormControl('', [Validators.required]),
    password : new FormControl('', [Validators.required]),
  })

  getUsername() {
    return this.formSignUp.get('username');
  }

  getEmail() {
    return this.formSignUp.get('email');
  }
  
  getPassword() {
    return this.formSignUp.get('password');
  }
  
  getConfPass() {
    return this.formSignUp.get('confirmPassword');
  }

  private passMismatch(control: AbstractControl) :ValidationErrors | null {
    if(control.get('password')?.value !== control.get('confirmPassword')?.value){ 
      return { mismatch : true };
    }
    return null;
  }

  onSignUp() {
    this.userData.username = this.formSignUp.get('username')?.value || '';
    this.userData.email = this.formSignUp.get('email')?.value || '';
    this.userData.password = this.formSignUp.get('password')?.value || '';
    this.userData.confirmPassword = this.formSignUp.get('confirmPassword')?.value || '';
    sessionStorage.setItem('userData', JSON.stringify(this.userData));
    sessionStorage.setItem('isLoggedIn', 'true');
    
    setTimeout(() => {
      window.location.href = '/products';
    }, 1000);
  }

  onSignIn() {
    const username = this.formSignIn.get('username')?.value || '';
    const password = this.formSignIn.get('password')?.value || '';
    
    const storedUserData = JSON.parse(sessionStorage.getItem('userData') || '{}');
    
    if (storedUserData.username === username && storedUserData.password === password) {
      sessionStorage.setItem('isLoggedIn', 'true');
      setTimeout(() => {
        window.location.href = '/products';
      }, 1000);
    } else {
      alert('Usuario y/o contraseña incorrectos');
    }
  }

  changeForm() : void {
    const formSignUp = document.getElementById('formSignUp');
    const formSignIn = document.getElementById('formSignIn');
    
    if (formSignUp?.classList.contains('hide')) {
      formSignUp?.classList.remove('hide');
      formSignIn?.classList.add('hide');
    } else {
      formSignUp?.classList.add('hide');
      formSignIn?.classList.remove('hide');
    }
  }
}
