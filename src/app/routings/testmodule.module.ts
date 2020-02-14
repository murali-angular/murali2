import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { TelevisionComponent } from './products/television/television.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { WashingMachineComponent } from './products/washing-machine/washing-machine.component';
import { ParentComponent } from './parent/parent.component';
import {GalleryComponent} from 'src/app/includes/gallery-item/gallery/gallery.component';
import{GalleryItemComponent}from 'src/app/includes/gallery-item/gallery-item.component';
import { Contact2Component } from './contact2/contact2.component';

const approutes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "gallery", component: GalleryComponent },
  { path: "gallery/:id", component: GalleryItemComponent },
  { path: "parent", component: ParentComponent },

  {
    path: "products",  children: [
      {path:'',component: ProductsComponent},
      { path: 'laptop', component: LaptopComponent },
      { path: 'mobile', component: MobileComponent },
      { path: 'television', component: TelevisionComponent },
      { path: 'washing-machine', component: WashingMachineComponent },
    ]
  },
  { path: "**", component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    HomeComponent,
    ProductsComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    PageNotFoundComponent,
    LaptopComponent,
    TelevisionComponent,
    MobileComponent,
    WashingMachineComponent,
    ParentComponent,
    Contact2Component
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(approutes)
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestmoduleModule { }
