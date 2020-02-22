import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-box',
  templateUrl: './button-box.component.html',
  styleUrls: ['./button-box.component.scss']
})
export class ButtonBoxComponent implements OnInit {
  @Input() boxNumber: number;
  @Output() buttonInteraction = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  buttonClick(boxId: number) {
    this.buttonInteraction.emit(boxId);
  }
}
