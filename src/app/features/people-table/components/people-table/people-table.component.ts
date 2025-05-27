import { Component, OnInit, Inject } from '@angular/core';
import { PeopleService } from '../../../../core/services/people.service';
import { Person } from '../../../../core/models/person.model';

@Component({
  selector: 'app-people-table',
  templateUrl: './people-table.component.html',
  styleUrls: ['./people-table.component.scss']
})
export class PeopleTableComponent implements OnInit {
  people: Person[] = [];
  loading = false;
  error = '';

  constructor(private readonly peopleService: PeopleService) {}

  ngOnInit(): void {
    this.loadPeople();
  }

  private loadPeople(): void {    
    this.loading = true;
    this.peopleService.getPeople().subscribe(data => {
      this.people = data;
      this.loading = false;
    },
    (error) => {
      this.error = 'Error loading people data';
      this.loading = false;
      console.error('Error fetching people:', error);
    });
  }
}