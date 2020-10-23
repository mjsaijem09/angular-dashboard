import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MaterialModules } from "./material/material.module";
import { AppComponent } from "./app.component";
import { SideBarComponent } from "./side-bar/side-bar.component";
import { HeaderComponent } from "./header/header.component";

import { NewSalesComponent } from "./dashboard/new-sales/new-sales.component";
import { MarketingComponent } from "./dashboard/marketing/marketing.component";
import { CashDrawerComponent } from "./dashboard/cash-drawer/cash-drawer.component";
import { RevenueComponent } from "./dashboard/revenue/revenue.component";
import { ServicesComponent } from "./dashboard/services/services.component";
import { ProductsComponent } from "./dashboard/products/products.component";
import { DashboardContentComponent } from "./dashboard/dashboard-content/dashboard-content.component";
import { CostComponent } from "./dashboard/cost/cost.component";
import { GenderComponent } from "./dashboard/gender/gender.component";
import { NewReturnComponent } from "./dashboard/new-return/new-return.component";
import { TopSpenderComponent } from "./dashboard/top-spender/top-spender.component";
import { PaymentMethodComponent } from "./dashboard/payment-method/payment-method.component";
import { ProfitsComponent } from "./dashboard/profits/profits.component";
import { TopTherapistComponent } from "./dashboard/top-therapist/top-therapist.component";
import { AverageWaitingTimeComponent } from "./dashboard/average-waiting-time/average-waiting-time.component";
import { AppointmentLogsComponent } from "./dashboard/appointment-logs/appointment-logs.component";
import { CheckoutLogsComponent } from "./dashboard/checkout-logs/checkout-logs.component";
import { BusinessRatingComponent } from "./dashboard/business-rating/business-rating.component";
import { TherapistsRatingComponent } from "./dashboard/therapists-rating/therapists-rating.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModules,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    NewSalesComponent,
    MarketingComponent,
    CashDrawerComponent,
    SideBarComponent,
    RevenueComponent,
    ServicesComponent,
    ProductsComponent,
    DashboardContentComponent,
    CostComponent,
    GenderComponent,
    NewReturnComponent,
    TopSpenderComponent,
    PaymentMethodComponent,
    ProfitsComponent,
    TopTherapistComponent,
    AverageWaitingTimeComponent,
    AppointmentLogsComponent,
    CheckoutLogsComponent,
    BusinessRatingComponent,
    TherapistsRatingComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
