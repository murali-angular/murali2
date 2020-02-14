import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRouting } from "./app.routing";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ApiService } from "./service/api.service";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { TokenInterceptor } from "./core/interceptor";
import { MaterialModule } from './shared/material.module';
import { ShopModule } from './shop/shop.module';
import { RegisterComponent } from './register/register.component';
import { TodoModule } from 'src/app/todo/todos/todo.module';
import { NewComponentComponent } from './new-component/new-component.component';
import { MuraliComponent } from './murali/murali.component';
import { StoreModule } from '@ngrx/store';
import { CustomerReducer } from './customer.reducer';
import { MycontainerComponent } from './mycontainer/mycontainer/mycontainer.component';
import { TopnavComponent } from './mycontainer/topnav/topnav.component';
import { HeaderComponent } from './mycontainer/header/header.component';
import { Txtsec1Component } from './mycontainer/txtsec1/txtsec1.component';
import { Txtsec2Component } from './mycontainer/txtsec2/txtsec2.component';
import { DatabindComponent } from './databind/databind.component';
import { ClassStyleComponent } from './databind/class-style/class-style.component';
import { EventbindComponent } from './databind/eventbind/eventbind.component';
import { TwoWayComponent } from './databind/two-way/two-way.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgifComponent } from './ngif/ngif.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { TestmoduleModule } from './routings/testmodule.module';
import { CardComponent } from './card/card.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { Card1Component } from './servicespractice/card1/card1.component';
import { Card2Component } from './servicespractice/card2/card2.component';
import { PracticeComponent } from './practice/practice.component';
import { PracticechildComponent } from './practicechild/practicechild.component';
import { Comp1Component } from './subjects/comp1/comp1.component';
import { Comp2Component } from './subjects/comp2/comp2.component';
import { Comp3Component } from './subjects/comp3/comp3.component';
import { Comp4Component } from './subjects/comp4/comp4.component';
import { Home1Component } from './subjects/home1/home1.component';
import { TestDirective } from './appDirectives/test.directive';
import { DropdownComponent } from './dropdown/dropdown.component';
import { DropdownDirective } from './appDirectives/dropdown.directive';
import { PipePipe } from './pipes/pipe.pipe';
import { PipetextComponent } from './pipetext/pipetext.component';
import { FooterComponent } from './includes/footer/footer.component';
import { MenuComponent } from './includes/menu/menu.component';
import { LoginComponent } from './includes/login/login.component';
import { GalleryItemComponent } from './includes/gallery-item/gallery-item.component';
import { FilterPipe } from './pipes/filter.pipe';
import { GalleryComponent } from './includes/gallery-item/gallery/gallery.component';
import { GalleryItems } from './appModals/gallery';
import { ManageProductsComponent } from './manage/manage-products/manage-products.component';
import { ManageUserComponent } from './manage/manage-user/manage-user.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NewComponentComponent,
    MuraliComponent,
    MycontainerComponent,
    TopnavComponent,
    HeaderComponent,
    Txtsec1Component,
    Txtsec2Component,
    DatabindComponent,
    ClassStyleComponent,
    EventbindComponent,
    TwoWayComponent,
    NgifComponent,
    NgforComponent,
    CardComponent,
    ParentComponent,
    ChildComponent,
    Card1Component,
    Card2Component,
    PracticeComponent,
    PracticechildComponent,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    Home1Component,
    TestDirective,
    DropdownComponent,
    DropdownDirective,
    PipePipe,
    PipetextComponent,
    FooterComponent,
    MenuComponent,
    LoginComponent,
    GalleryItemComponent,
    FilterPipe,
    GalleryComponent,
    ManageProductsComponent,
    ManageUserComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    ShopModule,
    TodoModule,
    FormsModule,
    AppRouting,
    TestmoduleModule,
    BsDatepickerModule.forRoot(),
    CollapseModule.forRoot(),
    StoreModule.forRoot({
      customers: CustomerReducer
    }),
    BrowserAnimationsModule
  ],
  providers: [ApiService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  },
  GalleryItems
],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
