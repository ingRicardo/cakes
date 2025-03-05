import {ChangeDetectionStrategy, Component, signal} from '@angular/core';

@Component({
  selector: 'app-workexp',
  templateUrl: './workexp.component.html',
  styleUrl: './workexp.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkexpComponent {
  readonly panelOpenState = signal(false);
}
