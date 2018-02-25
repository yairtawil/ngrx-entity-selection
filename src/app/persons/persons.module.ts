import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { ToolsComponent } from './tools/tools.component';
import { StoreModule } from '@ngrx/store';
import { personFeatureKey, personReducer } from './reducers/person.reducer';
import { ViewComponent } from './view/view.component';
import { BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(personFeatureKey, personReducer),
    BsDropdownModule.forRoot()
  ],
  declarations: [
    TableComponent,
    ToolsComponent,
    ViewComponent
  ],
  exports: [
    ViewComponent
  ]
})
export class PersonsModule { }
