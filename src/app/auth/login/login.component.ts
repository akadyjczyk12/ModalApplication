import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/modal/modal.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public model = {
    username: '',
    password: ''
  };

  constructor(private authService: AuthService, private modalService: ModalService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.modalService.initialize('Czy chcesz się zalogować?')
      .subscribe((isOnYes: boolean) => {
        if (isOnYes) {
          this.authService.login(this.model);
        } else {
          console.log('Błąd logowania!');
        }
      });
  }

}
