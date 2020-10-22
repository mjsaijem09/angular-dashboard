import { Component, OnInit } from "@angular/core";

export interface PeriodicElement {
  name: string;
  time: string;
  reference_no: Number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: "Hydrogen", time: "30 minutes", reference_no: 1011542650 },
  { name: "Helium", time: "30 minutes", reference_no: 1011542650 },
  { name: "Lithium", time: "30 minutes", reference_no: 1011542650 }
];

@Component({
  selector: "app-average-waiting-time",
  templateUrl: "./average-waiting-time.component.html",
  styleUrls: ["./average-waiting-time.component.css"]
})
export class AverageWaitingTimeComponent implements OnInit {
  constructor() {}

  displayedColumns: string[] = ["name", "time", "reference_no"];
  dataSource = ELEMENT_DATA;

  ngOnInit() {}
}
