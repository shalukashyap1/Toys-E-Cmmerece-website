import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HeaderComponent } from './components/header/header.component';
import { SignupComponent } from './components/signup/signup.component';
import { SellerAuthComponent } from './components/seller-auth/seller-auth.component';
import { SigninComponent } from './components/signin/signin.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { SellerRegisterComponent } from './components/seller-register/seller-register.component';
import { SellerdeshbordComponent } from './components/sellerdeshbord/sellerdeshbord.component';
import { LocationComponent } from './components/location/location.component';
import { AddtocartComponent } from './components/addtocart/addtocart.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { UsersdeshComponent } from './components/usersdesh/usersdesh.component';
import { authGuard } from './auth.guard';
import { EroorpageComponent } from './eroorpage/eroorpage.component';
import { UsersComponent } from './Auth/users/users.component';
import { AdminComponent } from './Auth/admin/admin.component';
import { ActiongamesComponent } from './categorys/actiongames/actiongames.component';
import { PurchasComponent } from './categorys/purchas/purchas.component';

const routes: Routes = [
  {
    path:"",component:HomeComponent
  },
  {
    path:"header",component:HeaderComponent
  },
  {
    path:"about",component:AboutUsComponent
  },
  {
    path:"contact",component:ContactUsComponent
  },
  {
    path:"signup",component:SignupComponent
  },
  {
    path:"signin",component:SigninComponent
  },
  {
    path:"sell",component:SellerAuthComponent,
    canActivate:[authGuard]
  },
  {
    path:"sellregister",component:SellerRegisterComponent
  },
  {
    path:"sellredesh",component:SellerdeshbordComponent,
  
  },
  {
    path:"users",component:UsersComponent,
    canActivate:[authGuard]
  },
  {
    path:"admin",component:AdminComponent,
  },
  {
    path:"usersdesh",component:UsersdeshComponent
  },  
  {
    path:"location",component:LocationComponent
  },
  {
    path:"addtocart",component:AddtocartComponent
  },
  {
    path:"wishlist",component:WishlistComponent
  },
  {
    path:"blogs",component:BlogsComponent
  },
  {
    path:"actiongames",component:ActiongamesComponent
  },
  {
    path:"purchase",component:PurchasComponent
  },
  {
    path:"**",component:EroorpageComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
