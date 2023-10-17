import { Component,EventEmitter,Input,Output,ViewEncapsulation } from '@angular/core';
import { AlertType } from './types/alert-type.type';

@Component({
  selector: 'd-alert',
  templateUrl: './d-alert.component.html',
  styleUrls: ['./d-alert.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class.d-alert': 'true'
  }
})
export class DAlertComponent {
  @Input() type: AlertType = 'info';
  @Input() showIcon = true;
  @Input() closeable = true;
  @Output() closeEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  protected hide = false;
  close (): void {
    this.closeEvent.emit(true);
    this.hide = true;
  }
}
