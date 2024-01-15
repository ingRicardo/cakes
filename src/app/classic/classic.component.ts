import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrl: './classic.component.css'
})
export class ClassicComponent {

  @Output() closeEvent = new EventEmitter<boolean>();

  closeEventFunc(value: boolean) {
    this.closeEvent.emit(value);
  }
}
