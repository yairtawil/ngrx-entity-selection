import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';
import {
  AddMany,
  AddOne,
  DeleteMany,
  DeleteOne,
  PersonActions,
  PersonActionTypes,
  SelectMany,
  UpdateOne
} from '../actions/person.actions';


export interface Person {
  id: string;
  age: number;
  firstName: string;
  lastName: string;
  phone: string;
}

export const personAdapter = createEntityAdapter<Person>();

export interface IPersonsState extends EntityState<Person> {
  selectedIds: Set<string>;
}

export const personInitialState: IPersonsState = personAdapter.getInitialState({
  selectedIds: new Set<string>()
});


export const personFeatureKey = 'person';

export const personFeatureSelector = createFeatureSelector<IPersonsState>(personFeatureKey);

class AdapterSelectFunctions {

  static selectOne(action: any, state: any): any {
    const values: Array<string> = Array.from(state.selectedIds.values());
    const selectedIds = new Set<string>([...values, action.payload]);
    return Object.assign({}, state, { selectedIds });
  }

  static selectMany(action: any, state: any): any {
    const values = Array.from(state.selectedIds.values());
    const payload: any = [...values, ...(<SelectMany>action).payload];
    const selectedIds = new Set<string>(payload);
    return Object.assign({}, state, { selectedIds });
  }

  static selectAll(state: any): any {
    return Object.assign({}, state, { selectedIds: new Set<string>(state.ids) });
  }

  static unSelectOne(action: any, state: any): any {
    const values: Array<string> = Array.from(state.selectedIds.values());
    const selectedIds = new Set<string>(values.filter(id => id !== action.payload));
    return Object.assign({}, state, { selectedIds });
  }

  static unSelectMany(action: any, state: any): any {
    const values = Array.from(state.selectedIds.values());
    const payload = <any> values.filter(id => !(<any>action.payload).includes(id));
    const selectedIds = new Set<string>(payload);
    return Object.assign({}, state, { selectedIds });
  }

  static unSelectAll(state: any): any {
    return Object.assign({}, state, { selectedIds: new Set<string>() });
  }


}

export function personReducer(state: IPersonsState = personInitialState, action: PersonActions): IPersonsState {
  switch (action.type) {
    case PersonActionTypes.ADD_ONE:
      return personAdapter.addOne((<AddOne>action).payload, state);

    case PersonActionTypes.ADD_MANY:
      return personAdapter.addMany((<AddMany>action).payload, state);

    case PersonActionTypes.UPDATE_ONE:
      return personAdapter.updateOne({
        id: (<UpdateOne>action).payload.id,
        changes: (<UpdateOne>action).payload.changes
      }, state);

    case PersonActionTypes.DELETE_ONE: {
      const updatedState: IPersonsState = AdapterSelectFunctions.unSelectOne(action, state);
      return personAdapter.removeOne((<DeleteOne>action).payload, updatedState);
    }

    case PersonActionTypes.DELETE_MANY: {
      const updatedState: IPersonsState = AdapterSelectFunctions.unSelectMany(action, state);
      return personAdapter.removeMany((<DeleteMany>action).payload, updatedState);
    }

    case PersonActionTypes.DELETE_ALL: {
      const updatedState: IPersonsState = AdapterSelectFunctions.unSelectAll(state);
      return personAdapter.removeAll(updatedState);
    }

    case PersonActionTypes.SELECT_ONE: {
      return AdapterSelectFunctions.selectOne(action, state);
    }

    case PersonActionTypes.SELECT_MANY: {
      return AdapterSelectFunctions.selectMany(action, state);
    }

    case PersonActionTypes.SELECT_ALL: {
      return AdapterSelectFunctions.selectAll(state);
    }

    case PersonActionTypes.UNSELECT_ONE: {
      return AdapterSelectFunctions.unSelectOne(action, state);
    }

    case PersonActionTypes.UNSELECT_MANY: {
      return AdapterSelectFunctions.unSelectMany(action, state);
    }

    case PersonActionTypes.UNSELECT_ALL: {
      return AdapterSelectFunctions.unSelectAll(state);
    }

    default:
      return state;
  }
}

export const {
  selectIds: selectUserIds,
  selectEntities: selectUserEntities,
  selectAll: selectAllUsers,
  selectTotal: selectUserTotal
} = personAdapter.getSelectors();


