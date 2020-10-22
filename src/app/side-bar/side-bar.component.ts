import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-side-bar",
  templateUrl: "./side-bar.component.html",
  styleUrls: ["./side-bar.component.css"]
})
export class SideBarComponent implements OnInit {
  @Output() opened = new EventEmitter();
  isExpanded: boolean = true;

  navs = [
    { title: "Dashboard", icon: "dashboard", path: "javascript:;" },
    { title: "Calendar", icon: "date_range", path: "javascript:;" },
    { title: "Sales", icon: "trending_up", path: "javascript:;" },
    { title: "Client", icon: "home_repair_service", path: "javascript:;" },
    { title: "Staff", icon: "group", path: "javascript:;" },
    { title: "Services", icon: "shopping_basket", path: "javascript:;" },
    { title: "Resources", icon: "widgets", path: "javascript:;" },
    { title: "Inventory", icon: "assignment", path: "javascript:;" },
    { title: "Analytiics", icon: "leaderboard", path: "javascript:;" },
    { title: "Setup", icon: "settings", path: "javascript:;" }
  ];

  constructor() {}

  ngOnInit() {}

  toggleSideNav() {
    this.isExpanded = !this.isExpanded;
    this.opened.emit(this.isExpanded);
  }
}
