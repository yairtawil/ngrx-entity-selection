import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/pluck';
import { AddMany } from './persons/actions/person.actions';
import * as entities from '../assets/entities.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public store: Store<any>) {
    this.store.dispatch(new AddMany(Object.values(entities)));
  }
}
