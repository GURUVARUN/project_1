import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { BookingInfoComponent } from './booking-info/booking-info.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminComponent } from './admin/admin.component';

import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';
import { MorepackagesComponent } from './morepackages/morepackages.component';
import { DisplayusersComponent } from './displayusers/displayusers.component';
import { CommonModule}from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { EditComponent } from './edit/edit.component';
import { AddpackageComponent } from './addpackage/addpackage.component';
import { AllbookingsComponent } from './allbookings/allbookings.component';
import { AddusersComponent } from './addusers/addusers.component';






@NgModule({
  declarations: [
    AppComponent,
    RegisterpageComponent,
    LoginpageComponent,
    HomeComponent,
    BookingComponent,
    BookingInfoComponent,
    AdminloginComponent,
    AdminComponent,
    CheckoutComponent,
    PaymentsuccessComponent,
    MorepackagesComponent,
    DisplayusersComponent,
    EditComponent,
    AddpackageComponent,
    AllbookingsComponent,
    AddusersComponent,

  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CommonModule,
    Ng2SearchPipeModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
