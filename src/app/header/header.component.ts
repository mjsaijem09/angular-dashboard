import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  @Input() deviceXs: boolean;
  @Input() deviceSm: boolean;
  @Input() deviceMd: boolean;
  @Input() deviceLg: boolean;
  @Input() deviceXl: boolean;

  constructor() {}

  ngOnInit() {}
}
