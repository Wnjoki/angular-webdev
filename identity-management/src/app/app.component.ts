import { Component } from '@angular/core';
import { Identity } from './identities';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Small Identity-management';

  Identities: Identity[] = [{
    firstname: "Teresiah",
    lastname: "Njoki",
    accountname: "Njokiw",
    personalnr: 1,
    costcenter: "101211",
    department: "IT",
    startDate: new Date("2023-03-01"),
  },
  { firstname: "Harry", lastname: "John", accountname: "Johnh", personalnr: 2, costcenter: "101210", department: "Accounting", startDate: new Date("2020-03-01"), },
  { firstname: "Jane", lastname: "Muller", accountname: "Janefol", personalnr: 3, costcenter: "101212", department: "Finance", startDate: new Date("2021-03-01"), },
  { firstname: "Sophia", lastname: "Mayer", accountname: "Sophiared", personalnr: 4, costcenter: "101213", department: "HR", startDate: new Date("2019-03-01"), },
  { firstname: "James", lastname: "Kim", accountname: "Jamesgrey", personalnr: 5, costcenter: "101214", department: "Production", startDate: new Date("2000-03-01"), endDate: new Date("2022-12-31") },
  { firstname: "Francis", lastname: "Luke", accountname: "Frankblue", personalnr: 6, costcenter: "101215", department: "Accounting", startDate: new Date("2023-03-01"), }
  ];

  DeleteIdentity(MyIdentity: Identity): void {
    this.Identities = this.Identities.filter(i => i != MyIdentity)
  }
}
