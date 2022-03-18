import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CreateInsuredComponent } from './create-insured/create-insured.component';
import { UpdateInsuredComponent } from './update-insured/update-insured.component';
import { ListInsuredComponent } from './list-insured/list-insured.component';
import { DetailInsuredComponent } from './detail-insured/detail-insured.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'insured-list', component: ListInsuredComponent },
  { path: 'insured-details/:id', component: DetailInsuredComponent },
  { path: 'insured-create', component: CreateInsuredComponent },
  { path: 'insured-update/:id', component: UpdateInsuredComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CreateInsuredComponent,
    UpdateInsuredComponent,
    ListInsuredComponent,
    DetailInsuredComponent,
    MenuComponent,
    HomeComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
