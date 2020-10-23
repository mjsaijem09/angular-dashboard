import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";
import { MediaObserver, MediaChange } from "@angular/flex-layout";
import { MatSidenav } from "@angular/material/sidenav";
import { Subscription } from "rxjs";

@Component({
  selector: "app-dashboard-content",
  templateUrl: "./dashboard-content.component.html",
  styleUrls: ["./dashboard-content.component.css"]
})
export class DashboardContentComponent implements OnInit, OnDestroy {
  mediaSubs: Subscription;
  deviceXs: boolean;
  deviceSm: boolean;
  deviceMd: boolean;
  deviceLg: boolean;
  deviceXl: boolean;

  ngOnDestroy() {
    this.mediaSubs.unsubscribe();
  }

  @ViewChild("sideBar") sideBar: MatSidenav;
  isExpanded: boolean = true;

  toggleSideNav(e) {
    console.log(e);
    this.isExpanded = e;
  }

  constructor(public mediaobserver: MediaObserver) {}
  ngOnInit() {
    this.mediaSubs = this.mediaobserver.media$.subscribe(
      (result: MediaChange) => {
        console.log(result.mqAlias);
        this.deviceXs = result.mqAlias === "xs" ? true : false;
        this.deviceSm = result.mqAlias === "sm" ? true : false;
        this.deviceMd = result.mqAlias === "md" ? true : false;
        this.deviceLg = result.mqAlias === "lg" ? true : false;
        this.deviceXl = result.mqAlias === "xl" ? true : false;
      }
    );
  }
}
