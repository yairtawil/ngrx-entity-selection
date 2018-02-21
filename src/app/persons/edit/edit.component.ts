import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../reducers/person.reducer';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input() person: Person;
  @Output() personChange = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

}
