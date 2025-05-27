import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleTableComponent } from './components/people-table/people-table.component';

@NgModule({
  declarations: [PeopleTableComponent],
  imports: [CommonModule],
  exports: [PeopleTableComponent]
})
export class PeopleTableModule { }