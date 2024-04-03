import { AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, HostListener, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { CustomModalService } from '../../services/custom-modal.service';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})

export class CustomModalComponent implements AfterViewInit {
  @ContentChild('modalBody') body : any;
  @ViewChild('modal') modal!: ElementRef<HTMLDivElement>;
  @ViewChild('bodyContent') bodyContent: ElementRef;

  @Output() onModalClose: EventEmitter<any> = new EventEmitter()

  @HostListener('document:click', ['$event'])
  onOverlayClick(event: PointerEvent) {
    if (!this.isModal) {
      return;
    }
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.modalService.closeModal()
    }
  }

  public isModalShown: boolean = false;
  public isModal: boolean = true;

  
  constructor(public modalService: CustomModalService
  ) { }

   public ngAfterViewInit(): void {
    this.modalService.modal$.subscribe((value: boolean) => {
      if (value) {
        this.isModalShown = true;
        setTimeout(() => {
          this.setOptions()
        }, 0);
      }
      else {
        this.isModalShown = false
      }
    })
  }

  public closeModal(value?: any) {
    if (this.body.closeModal) {
      this.body.closeModal();
    }
    if (this.body)
    this.modalService.closeModal();
  }

  private setOptions() {
    for (const [key, value] of Object.entries(this.modalService.modalSettings.size!)) {
      this.modal.nativeElement.style[key as any] = value
    }
  }
}
