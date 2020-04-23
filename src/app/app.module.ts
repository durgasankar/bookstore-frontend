import { AuthGuardService } from "./services/auth-guard.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from "ngx-spinner";
import {
  MatButtonModule,
  MatInputModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatSnackBarModule,
  MatGridListModule,
  MatCheckboxModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatRadioModule,
  MatSliderModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatStepperModule,
  MatTabsModule,
  MatExpansionModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatDialogModule,
  MatTooltipModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RegistrationComponent } from "./containers/user-authentication/registration/registration.component";
import { AuthenticationService } from "./services/authentication.service";
import { HttpService } from "./services/http.service";
import { PageNotFoundComponent } from "./containers/page-not-found/page-not-found.component";
import { LoginComponent } from "./containers/user-authentication/login/login.component";
import { HttpClientModule } from "@angular/common/http";
import { ActivateAccountComponent } from "./containers/user-authentication/activate-account/activate-account.component";
import { AdminDashboardComponent } from "./containers/dashboard/admin-dashboard/admin-dashboard.component";
import { TopNavBarComponent } from "./containers/dashboard/top-nav-bar/top-nav-bar.component";
import { AddBookComponent } from "./containers/dashboard/admin-dashboard/add-book/add-book.component";
import { AdminBookOperationService } from "./services/admin-book-operation.service";
import { BookComponent } from "./containers/dashboard/book/book.component";
import { DashboardComponent } from "./containers/dashboard/dashboard.component";
const MaterialModule = [
  MatCheckboxModule,
  MatCheckboxModule,
  MatButtonModule,
  MatInputModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatStepperModule,
  MatTabsModule,
  MatExpansionModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatDialogModule,
  MatTooltipModule,
  MatSnackBarModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    PageNotFoundComponent,
    LoginComponent,
    ActivateAccountComponent,
    AdminDashboardComponent,
    TopNavBarComponent,
    AddBookComponent,
    BookComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    NgxSpinnerModule,
  ],
  providers: [
    HttpService,
    AuthenticationService,
    AdminBookOperationService,
    AuthGuardService,
  ],
  entryComponents: [AddBookComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
