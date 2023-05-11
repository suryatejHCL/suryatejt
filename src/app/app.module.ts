import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

// Angular Material Module
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from '@angular/material/icon';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { CCS } from './ccs_service';
import { RegistrationComponent } from './material-forms/registration/registration.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { PaginatorComponent } from './paginator/paginator.component';
import { MatPaginatorModule } from "@angular/material/paginator";
import { RegUserDataComponent } from './reg-user-data/reg-user-data.component';
import { MatLoginComponent } from './material-forms/mat-login/mat-login.component';
@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    PagenotfoundComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SigninComponent,
    SignupComponent,
    TopNavComponent,
    UserComponent,
    BreadcrumbComponent,
    RegistrationComponent,
    PaginatorComponent,
    RegUserDataComponent,
    MatLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatSnackBarModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatPaginatorModule
  ],
  providers: [CCS],
  bootstrap: [AppComponent]
})
export class AppModule { }
