import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';

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

  onSubmit() {
    this.userData.username = this.formSignUp.get('username')?.value || '';
    this.userData.email = this.formSignUp.get('email')?.value || '';
    this.userData.password = this.formSignUp.get('password')?.value || '';
    this.userData.confirmPassword = this.formSignUp.get('confirmPassword')?.value || '';
    sessionStorage.setItem('userData', JSON.stringify(this.userData));
    
    // setTimeout(() => {
    //   window.location.href = '/';
    // }, 1000);
  }
}
