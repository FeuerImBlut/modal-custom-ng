import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-example-component',
  templateUrl: './example-component.component.html',
  styleUrls: ['./example-component.component.scss']
})


export class ExampleComponentComponent {
  @Output() onModalClosed = new EventEmitter();
  public message: string = ''

  public closeModal() {
    console.log(this.message);
    this.onModalClosed.emit(this.message)
  }
}
