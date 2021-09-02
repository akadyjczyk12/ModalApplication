import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalData } from 'src/app/_interfaces/modalData';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  modal: Observable<ModalData> = this.modalService.modalData$;
  constructor(private modalService: ModalService) { }

  onModalAction(state: boolean): void {
    this.modalService.setSelectedChoice(state);
  }

}
