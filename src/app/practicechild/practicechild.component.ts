import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-practicechild',
  templateUrl: './practicechild.component.html',
  styleUrls: ['./practicechild.component.css']
})
export class PracticechildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() boxColor;
  @Input() placeholderText;

  @Output() inputEvent = new EventEmitter()

  count: number = 0;
  onCreate(inpVal) {
    if (inpVal.value.length > 0) {
      this.count = this.count + 1;
     // alert(inpVal.value)
     this.inputEvent.emit(inpValvalue)
    }

  }
}
