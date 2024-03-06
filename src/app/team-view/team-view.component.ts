import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { Person } from '../shared/model/person';
import { PeronsService } from '../services/perons.service';
import { PersonCardComponent } from "../person-card/person-card.component";
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-team-view',
    standalone: true,
    templateUrl: './team-view.component.html',
    styleUrl: './team-view.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        MatCardModule,
        PersonCardComponent,
        RouterModule

    ]
})
export class TeamViewComponent implements OnInit {
  allPersons: Person[] = [];

  constructor(private personService: PeronsService) {
  }

  ngOnInit() {
    this.allPersons = this.personService.list();
  }

}