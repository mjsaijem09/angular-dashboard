import { Component, OnInit } from "@angular/core";

export interface PeriodicElement {
  name: string;
  date: string;
  spent: number;
  last_session: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { date: "Oct 22, 2020", name: "Hydrogen", spent: 1.0079, last_session: "3 days ago" },
  { date: "Oct 22, 2020", name: "Helium", spent: 4.0026, last_session: "3 days ago" },
  { date: "Oct 22, 2020", name: "Lithium", spent: 6.941, last_session: "3 days ago" },
  { date: "Oct 22, 2020", name: "Beryllium", spent: 9.0122, last_session: "3 days ago" }
];

@Component({
  selector: "app-checkout-logs",
  templateUrl: "./checkout-logs.component.html",
  styleUrls: ["./checkout-logs.component.css"]
})
export class CheckoutLogsComponent implements OnInit {
  displayedColumns: string[] = ["date", "name", "spent", "last_session"];
  dataSource = ELEMENT_DATA;
  constructor() {}

  ngOnInit() {}
}
