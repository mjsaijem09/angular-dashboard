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

  sidebarStatus: boolean = false;
  showSidebar() {
    this.sidebarStatus = !this.sidebarStatus;
  }

  hideSidebar() {
    this.sidebarStatus = !this.sidebarStatus;
  }

  constructor() {}

  ngOnInit() {}
}
