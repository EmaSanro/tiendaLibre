import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  
  isLoggedIn !: string;
  
  title = 'tiendaLibre';
  ngOnInit(): void {
    this.isLoggedIn = sessionStorage.getItem('isLoggedIn') || 'false';
  }
  
  closeSession() {
    sessionStorage.setItem('isLoggedIn', 'false');
    this.isLoggedIn = sessionStorage.getItem('isLoggedIn') || 'false';
    window.location.href = '/';
  }
  

}
