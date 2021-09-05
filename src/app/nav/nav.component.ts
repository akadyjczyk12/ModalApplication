import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { User } from '../_interfaces/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  user: Observable<User> = this.authService.userData$;
  constructor(public authService: AuthService) { }

  ngOnInit(): void {}

  logout(): void {
    this.authService.logout();
  }

}
