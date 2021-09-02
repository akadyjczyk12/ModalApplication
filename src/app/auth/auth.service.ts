import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ModalService } from '../modal/modal.service';
import { User } from '../_interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private dataSource = new BehaviorSubject<User>(null);
  userData$ = this.dataSource.asObservable();

  constructor(private router: Router, private modalService: ModalService) { }

  login(model: User): void {
    if (model) {
      console.log(model);
      localStorage.setItem('user', JSON.stringify(model));
      this.dataSource.next(model);
      this.router.navigateByUrl('dashboard');
    }
  }

  getUser(): User {
    return JSON.parse(localStorage.getItem('user'));
  }

  logout(): void {
    localStorage.removeItem('user');
    this.dataSource.next(null);
    this.router.navigateByUrl('/');
  }

}
