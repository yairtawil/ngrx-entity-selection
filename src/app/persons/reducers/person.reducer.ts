// import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';
import {
  AddMany,
  AddOne,
  DeleteMany,
  DeleteOne,
  PersonActions,
  PersonActionTypes, SelectAll, SelectMany, SelectOne, UnSelectOne,
  UpdateOne
} from '../actions/person.actions';
import { Person } from '../model/person.model';
import { createEntityAdapter, EntityState } from '@ngrx/entity';


export const personAdapter = createEntityAdapter<Person>();

export interface IPersonsState extends EntityState<Person> {
  selectedIds: Set<string>;
}

export const personInitialState: IPersonsState = personAdapter.getInitialState();

export const personFeatureKey = 'person';

export const personFeatureSelector = createFeatureSelector<IPersonsState>(personFeatureKey);


export function personReducer(state: IPersonsState = personInitialState, action: PersonActions): IPersonsState {
  switch (action.type) {
    case PersonActionTypes.ADD_ONE:
      return personAdapter.addOne(<Person>(<AddOne>action).payload, state);

    case PersonActionTypes.ADD_MANY:
      return personAdapter.addMany(<Person[]>(<AddMany>action).payload, state);

    case PersonActionTypes.UPDATE_ONE:
      return personAdapter.updateOne({
        id: (<UpdateOne>action).payload.id,
        changes: (<UpdateOne>action).payload.changes
      }, state);

    case PersonActionTypes.DELETE_ONE: {
      return personAdapter.removeOne((<DeleteOne>action).payload, state);
    }

    case PersonActionTypes.DELETE_MANY: {
      return personAdapter.removeMany((<DeleteMany>action).payload, state);
    }

    case PersonActionTypes.DELETE_ALL: {
      return personAdapter.removeAll(state);
    }

    case PersonActionTypes.SELECT_ONE: {
      return personAdapter.selectOne((<SelectOne>action).payload, state);
    }

    case PersonActionTypes.SELECT_MANY: {
      return personAdapter.selectMany((<SelectMany>action).payload, state);
    }

    case PersonActionTypes.SELECT_ALL: {
      return personAdapter.selectAll(state);
    }

    case PersonActionTypes.UNSELECT_ONE: {
      return personAdapter.unSelectOne((<UnSelectOne>action).payload, state);
    }

    // case PersonActionTypes.UNSELECT_MANY: {
    //   return AdapterSelectFunctions.unSelectMany(action, state);
    // }

    case PersonActionTypes.UNSELECT_ALL: {
      return personAdapter.unSelectAll(state);
    }

    default:
      return state;
  }
}

export const {
  selectIds: selectUserIds,
  selectEntities: selectUserEntities,
  selectAll: selectAllUsers,
  selectTotal: selectUserTotal,
  selectSelectedIds
} = personAdapter.getSelectors();


