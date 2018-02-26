import { Action } from '@ngrx/store';
import { Person } from '../model/person.model';
import { SelectOption } from '../model/select-option.model';
import { SelectedId, SelectedIds} from '@ngrx/entity';

export enum PersonActionTypes {
  ADD_ONE = '[Persons] Add One',
  ADD_MANY = '[Persons] Add Many',
  UPDATE_ONE = '[Persons] Update One',
  DELETE_ONE = '[Persons] Delete One',
  DELETE_MANY = '[Persons] Delete Many',
  DELETE_ALL = '[Persons] Delete All',

  SELECT_ONLY = '[Persons] Select only',
  SELECT_MANY = '[Persons] Select Many',
  SELECT_ONE = '[Persons] Select One',
  SELECT_ALL = '[Persons] Select All',
  UNSELECT_ONE = '[Persons] UnSelect One',
  UNSELECT_MANY = '[Persons] UnSelect Many',
  UNSELECT_ALL = '[Persons] UnSelect All',

  SET_SELECT_OPTION = '[Persons] Set Select Option'
}

export class AddOne implements Action {
  readonly type = PersonActionTypes.ADD_ONE;

  constructor(public payload: Person) {
  }
}

export class UpdateOne implements Action {
  readonly type = PersonActionTypes.UPDATE_ONE;

  constructor(public payload: { id: string, changes: Partial<Person> }) {

  }
}

export class DeleteOne implements Action {
  readonly type = PersonActionTypes.DELETE_ONE;

  constructor(public payload: string) {
  }
}

export class DeleteMany implements Action {
  readonly type = PersonActionTypes.DELETE_MANY;

  constructor(public payload: string[]) {
  }
}
export class DeleteAll implements Action {
  readonly type = PersonActionTypes.DELETE_ALL;
}

export class AddMany implements Action {
  readonly type = PersonActionTypes.ADD_MANY;

  constructor(public payload: Person[]) {
  }
}

// Select actions
export class SelectOnly implements Action {
  readonly type = PersonActionTypes.SELECT_ONLY;

  constructor(public payload: SelectedIds) {
  }
}

export class SelectOne implements Action {
  readonly type = PersonActionTypes.SELECT_ONE;

  constructor(public payload: SelectedId) {
  }
}

export class SelectMany implements Action {
  readonly type = PersonActionTypes.SELECT_MANY;

  constructor(public payload: SelectedIds) {
  }
}

export class SelectAll implements Action {
  readonly type = PersonActionTypes.SELECT_ALL;
}

export class UnSelectAll implements Action {
  readonly type = PersonActionTypes.UNSELECT_ALL;
}


export class UnSelectOne implements Action {
  readonly type = PersonActionTypes.UNSELECT_ONE;

  constructor(public payload: SelectedId) {
  }
}

export class UnSelectMany implements Action {
  readonly type = PersonActionTypes.UNSELECT_MANY;

  constructor(public payload: SelectedIds) {
  }
}

export class SetSelectOption implements Action {
  readonly type = PersonActionTypes.SET_SELECT_OPTION;

  constructor(public payload: SelectOption) {
  }
}

export type PersonActions
  = AddOne
  | UpdateOne
  | DeleteOne
  | DeleteMany
  | DeleteAll
  | AddMany
  | SelectOne
  | SelectMany
  | SelectAll
  | SelectOnly
  | UnSelectOne
  | UnSelectMany
  | UnSelectAll
  | SetSelectOption;
