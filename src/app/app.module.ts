import { AuthGuardService } from "./services/auth-guard.service";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxPaginationModule } from "ngx-pagination";
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
  MatBadgeModule,
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
import { UserBookService } from "./services/user-book.service";
import { UserCartComponent } from "./containers/dashboard/user-cart/user-cart.component";
import { SearchPipe } from "./pipes/search.pipe";
import { SortBooksPipe } from "./pipes/sort-books.pipe";
import { OrderSucessPageComponent } from "./containers/dashboard/order-sucess-page/order-sucess-page.component";
const MaterialModule = [
  MatCheckboxModule,
  MatCheckboxModule,
  MatButtonModule,
  MatBadgeModule,
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
    UserCartComponent,
    SearchPipe,
    SortBooksPipe,
    OrderSucessPageComponent,
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
    NgxPaginationModule,
  ],
  providers: [
    HttpService,
    AuthGuardService,
    AuthenticationService,
    AdminBookOperationService,
    UserBookService,
  ],
  entryComponents: [AddBookComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
