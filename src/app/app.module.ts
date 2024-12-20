import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarousalComponent } from './carousal/carousal.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductlistComponent } from './productlist/productlist.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { GcategoryComponent } from './gcategory/gcategory.component';
import { EcategoryComponent } from './ecategory/ecategory.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SocialComponent } from './social/social.component';
import { WebDesignComponent } from './web-design/web-design.component';
// import { LightgalleryModule } from 'lightgallery/angular';
import { LightgalleryModule } from 'lightgallery/angular/9';
import { ContactComponent } from './contact/contact.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { SocialMediaComponent } from './social-media/social-media.component';

@NgModule({
  declarations: [
    AppComponent,
    CarousalComponent,
    ProductlistComponent,
    SingleproductComponent,
    CategorylistComponent,
    CreateComponent,
    UpdateComponent,
    DeleteComponent,
    GcategoryComponent,
    EcategoryComponent,
    HomeComponent,
    SocialComponent,
    WebDesignComponent,
    ContactComponent,
    WebDevelopmentComponent,
    SocialMediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    LightgalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
