import { Component, OnInit, Input } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_spirited from "@amcharts/amcharts4/themes/frozen";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

import { MediaObserver, MediaChange } from "@angular/flex-layout";
import { Subscription } from "rxjs";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  mediaSubs: Subscription;
  deviceXs: boolean;
  deviceSm: boolean;
  deviceMd: boolean;
  deviceLg: boolean;
  deviceXl: boolean;

  constructor(public mediaobserver: MediaObserver) {}

  chartTitle = "Products";
  @Input() pie;

  ngOnInit() {
    console.log("this.pie ===>", this.pie);
    setTimeout(() => {
      this.plotPieFirstChart();
    }, 2000);

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

  plotPieFirstChart() {
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_spirited);
    am4core.useTheme(am4themes_animated);
    // Themes end

    // Create chart instance
    let chart = am4core.create("products-chart", am4charts.PieChart);

    // Add data
    chart.data = [
      {
        country: "Lithuania",
        litres: 501.9
      },
      {
        country: "Czechia",
        litres: 301.9
      },
      {
        country: "Ireland",
        litres: 201.1
      },
      {
        country: "Germany",
        litres: 165.8
      },
      {
        country: "Australia",
        litres: 139.9
      },
      {
        country: "Austria",
        litres: 128.3
      },
      {
        country: "UK",
        litres: 99
      }
    ];

    // Add and configure Series
    let pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.slices.template.stroke = am4core.color("#fff");
    pieSeries.slices.template.strokeOpacity = 1;
    pieSeries.ticks.template.disabled = true;
    pieSeries.labels.template.disabled = true;

    // This creates initial animation
    pieSeries.hiddenState.properties.opacity = 1;
    pieSeries.hiddenState.properties.endAngle = -90;
    pieSeries.hiddenState.properties.startAngle = -90;

    chart.hiddenState.properties.radius = am4core.percent(0);
    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";
    // chart.legend.maxHeight = 100;
    chart.legend.width = 100;

    chart.exporting.menu = new am4core.ExportMenu();
    chart.exporting.menu.items = [
      {
        label:
          "<img width=30 height=30 src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsSAAALEgHS3X78AAACEElEQVRoge2b3U3DMBRGvyLe6Qa1Jb/TDSgTUDagE9ANSDeACSgblAkoG5R3S/YIZYIiSzdSwG1qh9pNHB8pD72OYp34304Hu90OfeKiV7ZZuAdk4dTJwqmThVOnk8KC8Qcr6EhXS/i1qXSXq3Qj6c4JC8ZZ5ae3dCdWSyRZAJgCuLJuAGZSq6UV3YOXsEPGp2IhtSoE40PK79HhuU7SzsKC8TGANV3P1g2nRQPYUl7XHk/mUittRStcWpHDrMwltWo8JPggGN94ys6OycK106LSHQGYW4kBEIwXDWSd2rBrL23a0qfUamulnBjqJ54qT/0ybRrALVXZQVNZeFbpWJS1yIjOpVbrmny9ZNsqbEaAN4e+wlsWbRMuRwIH2Xup1cqKOtC2mZY+JisYn9Bw1YhWCTt2ih8AxlbUkbweDolg/OjEIDSxS3hkRSKTq3TqZOHUycKpE0zYrGkF47WTe5MuGI+yxi4JWcJmG2h8SLqMS61Cbxf9IpgwzYsn+6QrsrULhRAEbcP7pM8pixidVlW6EjuLLGL10hXpxTllEXPHg6QLKyEyeRxOnSycOlm4BnY4KTqNj3xchc1J3og2ys+GYNycSnxLrTZBhWkMfQGw/PPJQTToZS//ezbtcyA+pAzvALxTqcfCzNJuHM+cavH+xoPe9NRKCM/qP1W5JP8FIHWycOpk4dTJwqnTL2EAP5QSu34+E9+tAAAAAElFTkSuQmCC'><img>",
        menu: [
          {
            label: "Image",
            menu: [
              { type: "png", label: "PNG" },
              { type: "jpg", label: "JPG" },
              { type: "svg", label: "SVG" },
              { type: "pdf", label: "PDF" }
            ]
          },
          {
            label: "Data",
            menu: [
              { type: "json", label: "JSON" },
              { type: "csv", label: "CSV" },
              { type: "xlsx", label: "XLSX" },
              { type: "html", label: "HTML" },
              { type: "pdfdata", label: "PDF" }
            ]
          },
          {
            label: "Print",
            type: "print"
          }
        ]
      }
    ];
    chart.exporting.filePrefix = "platformSale";
    // "topPlatform" + " " + "week-" + this.filterData.week[0];
    chart.exporting.menu.align = "left";
    chart.exporting.menu.verticalAlign = "top";
  }
  ngOnDestroy() {
    this.mediaSubs.unsubscribe();
  }
}
