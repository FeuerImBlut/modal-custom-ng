import { Component } from '@angular/core';
import { CustomModalService } from './modules/custom-modal/services/custom-modal.service';
import { ModalSettings } from './modules/custom-modal/models/modal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public message: string;

  constructor(private modalService: CustomModalService) { }

  public modalClosed(event: any) {
    this.message = event
  }
  public showModal() {
    const settings: ModalSettings = {
      size: {
        height: '300px',
        width: '200px'
      }
    }
    this.modalService.openModal(settings)
  }

  public title = 'custom-modal';

  public isModalShown: boolean = false;
}
