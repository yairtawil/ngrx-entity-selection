import { Component, OnInit } from '@angular/core';
import { selectAllUsers, selectSelectedIds } from '../reducers/index';
import { Store } from '@ngrx/store';
import { IPersonsState } from '../reducers/person.reducer';
import { SelectAll, SelectOne, UnSelectAll, UnSelectOne } from '../actions/person.actions';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  persons$ = this.store.select(selectAllUsers);
  selected$ = this.store.select(selectSelectedIds);
  selected;
  persons;

  constructor(public store: Store<IPersonsState>) {
  }

  ngOnInit() {
    this.selected$.subscribe(selected => this.selected = selected);
    this.persons$.subscribe(persons => this.persons = persons);
  }

  select(id) {
    if (this.isSelected(id)) {
      this.store.dispatch(new UnSelectOne(id));
    } else {
      this.store.dispatch(new SelectOne(id));
    }
  }

  isSelected(id) {
    return this.selected.includes(id);
  }

  selectAll() {
    if (this.isAllSelected()) {
      this.store.dispatch(new UnSelectAll());
    } else {
      this.store.dispatch(new SelectAll());
    }
  }

  isAllSelected(): boolean {
    return !this.noEntities() && (this.selected.length === this.persons.length);
  }

  noEntities() {
    return (this.persons.length === 0);
  }

}
