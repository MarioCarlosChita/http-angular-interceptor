import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PersonService } from './services/person-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  listPersons: any[] = [];
  arraySubscription: Array<Subscription> = new Array<Subscription>();
  constructor(private personservice: PersonService) { }
  ngOnInit(): void {
    this.loadListPerson();
  }
  loadListPerson() {
    const subscriptionPersons: Subscription = this.personservice.listPerson().subscribe((persons) => {
      this.listPersons = persons.line > 0 ? persons.date : [];
    }, ((error) => {
      this.listPersons = [];
    }));
    this.arraySubscription = [...this.arraySubscription, subscriptionPersons];
  }


 




}
