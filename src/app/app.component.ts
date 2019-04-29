import { Component } from '@angular/core';
import { AuthService } from './libs/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    AuthService
  ]
})
export class AppComponent {
  title: string = 'Sai Yang\'s Code Challenge';
  isAuthenticated: boolean = false;

  constructor(
    private router: Router,
    private authSvc: AuthService
  ) {

  }
  
  ngOnInit() {
    this.checkAuthentication();
  }

  logout() {
    this.authSvc.logout();
    this.checkAuthentication();
  }

  checkAuthentication() {
    this.isAuthenticated = this.authSvc.isAuthenticated();
  }
}
