import { OrderSucessPageComponent } from "./containers/dashboard/order-sucess-page/order-sucess-page.component";
import { UserCartComponent } from "./containers/dashboard/user-cart/user-cart.component";
import { ActivateAccountComponent } from "./containers/user-authentication/activate-account/activate-account.component";
import { RegistrationComponent } from "./containers/user-authentication/registration/registration.component";
import { PageNotFoundComponent } from "./containers/page-not-found/page-not-found.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./containers/user-authentication/login/login.component";
import { AdminDashboardComponent } from "./containers/dashboard/admin-dashboard/admin-dashboard.component";
import { DashboardComponent } from "./containers/dashboard/dashboard.component";
import { AuthGuardService } from "./services/auth-guard.service";

const routes: Routes = [
  { path: "", redirectTo: "/signin", pathMatch: "full" },
  { path: "signup", component: RegistrationComponent },
  { path: "signin", component: LoginComponent },
  { path: "verification/:token", component: ActivateAccountComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuardService],
    children: [
      { path: "", component: AdminDashboardComponent },
      { path: "cart", component: UserCartComponent },
      { path: "success", component: OrderSucessPageComponent },
    ],
  },

  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
