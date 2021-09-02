import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { ModalData } from 'src/app/_interfaces/modalData';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private defaultModalConfig: ModalData = { text: '', isActive: false };
  private modalSource = new BehaviorSubject<ModalData>(this.defaultModalConfig);
  public modalData$ = this.modalSource.asObservable();

  private afterClosedSource = new Subject<boolean>();
  public afterClosed$ = this.afterClosedSource.asObservable().pipe(take(1));

  constructor() {}

  initialize(text: string): Observable<boolean> {
    this.modalSource.next({ text, isActive: true });
    return this.afterClosed$;
  }

  setSelectedChoice(state: boolean): void {
    this.afterClosedSource.next(state);
    this.modalSource.next(this.defaultModalConfig);
  }

}

