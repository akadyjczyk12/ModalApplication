import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalService } from './modal/modal.service';
import { ModalData } from './_interfaces/modalData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private modalService: ModalService) {}
  open: Observable<ModalData> = this.modalService.modalData$;
}
