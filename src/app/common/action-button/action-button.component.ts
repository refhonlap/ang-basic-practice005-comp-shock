import { Input, Output, Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent implements OnInit {

  @Input() icon: string = 'fa-pen';
  @Input() btnClass: string = 'btn-info';
  @Input() text: string = '';
  @Output() clicked: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  onUserCliced(): void {
    this.clicked.emit(true);
  }

  ngOnInit(): void {
  }

}
