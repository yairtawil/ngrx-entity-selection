import { Component, OnInit } from '@angular/core';
import { AddOne, DeleteMany, SetSelectOption } from '../actions/person.actions';
import { Store } from '@ngrx/store';
import { IPersonsState } from '../reducers/person.reducer';
import * as faker from 'faker';
import { selectSelectedIds, selectSelectOption } from '../reducers';
import { SelectOption, SelectOptions } from '../model/select-option.model';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.css']
})
export class ToolsComponent implements OnInit {
  selected$ = this.store.select(selectSelectedIds);
  selected: string[] = [];
  selectOption$ = this.store.select(selectSelectOption);
  selectOption;
  selectOptions = Object.values(SelectOptions);

  constructor(public store: Store<IPersonsState>) {
  }

  addPerson() {
    this.store.dispatch(new AddOne({
      id: new Date().getTime().toString(),
      age: Math.floor(Math.random() * 20) + 18,
      firstName: faker.name.firstName(),
      lastName: faker.name.firstName(),
      phone: faker.phone.phoneNumber()
    }));
  }

  deleteSelected() {
    this.store.dispatch(new DeleteMany(this.selected));
  }

  setSelectOptions(option: SelectOption) {
    this.store.dispatch(new SetSelectOption(option))
  }

  ngOnInit() {
    this.selected$.subscribe((selected: string[]) => this.selected = selected);
    this.selectOption$.subscribe((selectOption: SelectOption) => this.selectOption = selectOption);
  }

}
