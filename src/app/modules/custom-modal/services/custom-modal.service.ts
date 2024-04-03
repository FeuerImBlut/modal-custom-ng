import { Injectable } from '@angular/core';
import { ModalSettings } from '../models/modal.model';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomModalService {
  public get isModalOpened(): boolean {
    return this._isModalOpened;
  };

  private _isModalOpened: boolean = false

  private modalSubject: Subject<boolean> = new Subject();
  public modal$: Observable<boolean> = this.modalSubject.asObservable()

  private _modalSettings: ModalSettings = {
    size: {
      height: 'auto',
      width: 'auto',
      maxHeight: 'none',
      maxWidth: 'none',
      minHeight: '0',
      minWidth: '0'
    },
    
  };

  public get modalSettings(): ModalSettings {
    return this._modalSettings
  }

  constructor() { }

  openModal(settings?: ModalSettings) {
    settings && (this._modalSettings = settings)
    this.modalSubject.next(true)
  }

  closeModal() {
    this.modalSubject.next(false)
  }

}
