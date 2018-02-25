import { Component, OnInit } from '@angular/core';
import { selectAllUsers, selectSelectedIds } from '../reducers/index';
import { Store } from '@ngrx/store';
import { IPersonsState } from '../reducers/person.reducer';
import { SelectAll, SelectOne, SelectOnly, UnSelectAll, UnSelectOne } from '../actions/person.actions';
import { selectSelectOption } from '../reducers';
import { SelectOption } from '../model/select-option.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  persons$ = this.store.select(selectAllUsers);
  selected$ = this.store.select(selectSelectedIds);
  selectOption$ = this.store.select(selectSelectOption);

  persons;
  selected;
  selectOption;

  constructor(public store: Store<IPersonsState>) {
  }

  ngOnInit() {
    this.selected$.subscribe(selected => this.selected = selected);
    this.persons$.subscribe(persons => this.persons = persons);
    this.selectOption$.subscribe((selectOption: SelectOption) => this.selectOption = selectOption);
  }

  select(id) {
    if (this.isSelected(id)) {
      this.store.dispatch(new UnSelectOne(id));
    } else {
      switch (this.selectOption) {
        case 'Multiple':
          this.store.dispatch(new SelectOne(id));
          break;
        case 'Single':
          this.store.dispatch(new SelectOnly([id]));
          break;
      }
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

  disabledSelectAll() {
    return this.noEntities() || this.selectOption !== 'Multiple';
  }

}
