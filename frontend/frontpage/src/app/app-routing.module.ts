import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { BookingInfoComponent } from './booking-info/booking-info.component';
import { BookingComponent } from './booking/booking.component';
import { HomeComponent } from './home/home.component';
import { LoginpageComponent }from './loginpage/loginpage.component'
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';
import { MorepackagesComponent } from './morepackages/morepackages.component';
import { DisplayusersComponent } from './displayusers/displayusers.component';
import { EditComponent } from './edit/edit.component';
import { AddpackageComponent } from './addpackage/addpackage.component';
import { AllbookingsComponent } from './allbookings/allbookings.component';
import { AddusersComponent } from './addusers/addusers.component';



const routes: Routes = [
  {path:"" ,component:LoginpageComponent},
  {path:"home/:name" ,component:HomeComponent},
  {path:"registerpage" ,component:RegisterpageComponent},
  {path:"loginpage" ,component:LoginpageComponent},
  {path:"booking/:name", component:BookingComponent},
  {path:"bookingInfo/:name", component:BookingInfoComponent},
  {path:"adminlogin",component:AdminloginComponent},
  {path:"admin",component:AdminComponent},
  {path:"checkout",component:CheckoutComponent},
  {path:"paymentsuccess",component:PaymentsuccessComponent},
  {path:"morepackages",component:MorepackagesComponent},
  {path:"allbookings",component:AllbookingsComponent},
  {path:"displayusers",component:DisplayusersComponent},
  {path:"edit/:id",component:EditComponent},
  {path:"addpackage",component:AddpackageComponent},
  {path:"addusers",component:AddusersComponent}
 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
