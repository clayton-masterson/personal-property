import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';
import { AuthenticationService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username!: string;
  password!: string;
  showLoginError = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {}

  doLogin() {
    this.authenticationService
      .authenticationService(this.username, this.password)
      .subscribe({
        next: (data) => {
          this.showLoginError = false;
          this.router.navigate(['insured-list']);
        },
        error: (error) => {
          this.showLoginError = true;
        }
      });
  }
}
