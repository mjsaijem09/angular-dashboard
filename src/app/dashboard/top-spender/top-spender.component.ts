import { Component, OnInit } from "@angular/core";

export interface PeriodicElement {
  name: string;
  position: number;
  spent: number;
  last_session: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: "Hydrogen", spent: 1.0079, last_session: "3 days ago" },
  { position: 2, name: "Helium", spent: 4.0026, last_session: "3 days ago" },
  { position: 3, name: "Lithium", spent: 6.941, last_session: "3 days ago" },
  { position: 4, name: "Beryllium", spent: 9.0122, last_session: "3 days ago" }
];

@Component({
  selector: "app-top-spender",
  templateUrl: "./top-spender.component.html",
  styleUrls: ["./top-spender.component.css"]
})
export class TopSpenderComponent implements OnInit {
  displayedColumns: string[] = ["position", "name", "spent", "last_session"];
  dataSource = ELEMENT_DATA;
  constructor() {}

  ngOnInit() {}
}
