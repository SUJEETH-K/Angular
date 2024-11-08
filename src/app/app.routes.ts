import { Routes,RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PaymentComponent } from './payment/payment.component';
import { CheckoutComponent } from './checkout/checkout.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component:LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'userDet', component: UserDetailsComponent },
  { path: 'product', component: ProductListComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'checkout', component: CheckoutComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],//forRoot(routes) is a method that configures the router at the root level of the application 'routes' is the array of routes declaraed here 
  exports: [RouterModule],//exporting RouterModule makes router directives available for use in the other components that will need them
})
export class AppRoutingModule {}
