import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarousalComponent } from './carousal/carousal.component';
import { SingleproductComponent } from './singleproduct/singleproduct.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { EcategoryComponent } from './ecategory/ecategory.component';
import { GcategoryComponent } from './gcategory/gcategory.component';
import { HomeComponent } from './home/home.component';
import { SocialComponent } from './social/social.component';
import { WebDesignComponent } from './web-design/web-design.component';
import { ContactComponent } from './contact/contact.component';
import { WebDevelopmentComponent } from './web-development/web-development.component';
import { SocialMediaComponent } from './social-media/social-media.component';


const routes: Routes = [
  {
    path : "",
    component:HomeComponent
  },
  {
    path : "social",
    component:SocialComponent
  },
  {
    path : "graphicdesign",
    component:WebDesignComponent
  },
  {
    path : "contact",
    component:ContactComponent
  },
  {
    path : "webdesigning",
    component:WebDevelopmentComponent
  },
  {
    path : "socialmedia",
    component:SocialMediaComponent
  }
  // {
  //   path:"product/:id",
  //   component:SingleproductComponent
  // },
  // {
  //   path:"category/Women",
  //   component:CategorylistComponent
  // },
  // {
  //   path:"category/Electronics",
  //   component:EcategoryComponent
  // },
  // {
  //   path:"category/Groceries",
  //   component:GcategoryComponent
  // },
  // {
  //   path:"create",
  //   component:CreateComponent
  // },
  // {
  //   path:"update",
  //   component:UpdateComponent
  // },
  // {
  //   path:"delete",
  //   component:DeleteComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
