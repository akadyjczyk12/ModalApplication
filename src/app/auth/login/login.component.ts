import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalService } from 'src/app/modal/modal.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  private subscription = new Subscription();

  public model = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService, private modalService: ModalService) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onSubmit(): void {
    this.subscription.add(this.modalService.initialize('Czy chcesz się zalogowac?').subscribe(onYes => {
      if (onYes) {
        this.authService.login(this.model);
      } else {
        console.log('Nie pozwalasz...');
      }
    }));
  }
}
