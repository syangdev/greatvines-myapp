
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  constructor(private router: Router) {}

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('oauth2');
    const oauth2 = JSON.parse(token);
    return !!oauth2;
  }

  public logout() {
    localStorage.removeItem('oauth2');
    this.router.navigate(['/login']);
  }

  public checkOAuth2() {
    if (window.location.hash.match(/access_token/) != null) {
      this.router.url;
      const oauth2 = JSON.stringify(this.router.parseUrl(window.location.hash.replace(/^#/,'?')).queryParams);
      localStorage.setItem('oauth2', oauth2)
      this.router.navigate(['/']);
    }
    return false;
  }

  public getOAuth2() {
    return JSON.parse(localStorage.getItem('oauth2'));
  }
}