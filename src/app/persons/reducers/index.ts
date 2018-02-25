import * as fromPerson from './person.reducer';
import { IPersonsState, personFeatureSelector } from './person.reducer';
import { createSelector } from '@ngrx/store';

export const selectUserIds = createSelector(personFeatureSelector, fromPerson.selectUserIds);
export const selectUserEntities = createSelector(personFeatureSelector, fromPerson.selectUserEntities);
export const selectAllUsers = createSelector(personFeatureSelector, fromPerson.selectAllUsers);
export const selectUserTotal = createSelector(personFeatureSelector, fromPerson.selectUserTotal);
export const selectSelectedIds = createSelector(personFeatureSelector, fromPerson.selectSelectedIds);
