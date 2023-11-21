import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SignupComponent } from './components/signup/signup.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { SellerAuthComponent } from './components/seller-auth/seller-auth.component';
import{SigninComponent} from './components/signin/signin.component'
import { BlogsComponent } from './components/blogs/blogs.component';
import { SellerService } from './services/seller.service';
import { SellerRegisterComponent } from './components/seller-register/seller-register.component';
import { SellerdeshbordComponent } from './components/sellerdeshbord/sellerdeshbord.component';
import { LocationComponent } from './components/location/location.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { AddtocartComponent } from './components/addtocart/addtocart.component';
import { UsersdeshComponent } from './components/usersdesh/usersdesh.component';
import { EroorpageComponent } from './eroorpage/eroorpage.component';
import { UsersComponent } from './Auth/users/users.component';
import { AdminComponent } from './Auth/admin/admin.component';
import{UserService} from './services/user.service';
import { ActiongamesComponent } from './categorys/actiongames/actiongames.component';
import{ProductsService} from './services/products.service';
import { PurchasComponent } from './categorys/purchas/purchas.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    AboutUsComponent,
    ContactUsComponent,
    HomeComponent,
    SellerAuthComponent,
    SigninComponent,
    BlogsComponent,
    SellerRegisterComponent,
    SellerdeshbordComponent,
    LocationComponent,
    WishlistComponent,
    AddtocartComponent,
    UsersdeshComponent,
    EroorpageComponent,
    UsersComponent,
    AdminComponent,
    ActiongamesComponent,
    PurchasComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [SellerService,UserService,ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
