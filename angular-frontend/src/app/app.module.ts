import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateInsuredComponent } from './create-insured/create-insured.component';
import { UpdateInsuredComponent } from './update-insured/update-insured.component';
import { ListInsuredComponent } from './list-insured/list-insured.component';
import { DetailInsuredComponent } from './detail-insured/detail-insured.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateInsuredComponent,
    UpdateInsuredComponent,
    ListInsuredComponent,
    DetailInsuredComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
