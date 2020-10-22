import { Component, OnInit } from "@angular/core";

export interface PeriodicElement {
  name: string;
  spent: number;
  last_session: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: "Hydrogen", spent: 1.0079, last_session: "3 days ago" },
  { name: "Helium", spent: 4.0026, last_session: "3 days ago" },
  { name: "Lithium", spent: 6.941, last_session: "3 days ago" }
];

@Component({
  selector: "app-appointment-logs",
  templateUrl: "./appointment-logs.component.html",
  styleUrls: ["./appointment-logs.component.css"]
})
export class AppointmentLogsComponent implements OnInit {
  displayedColumns: string[] = ["name", "spent", "last_session"];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit() {}
}
