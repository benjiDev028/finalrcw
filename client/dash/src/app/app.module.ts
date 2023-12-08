import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CriminelsComponent } from './components/criminels/criminels.component';
import { CriminelcrudComponent } from './components/criminelcrud/criminelcrud.component';
import { HttpClientModule } from '@angular/common/http';

import { CriminelAddComponent } from './components/criminel-add/criminel-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CriminelListComponent } from './components/criminel-list/criminel-list.component';
import { CrimineleditComponent } from './components/crimineledit/crimineledit.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CriminelsComponent,
    CriminelcrudComponent,
    CriminelAddComponent,
    CriminelListComponent,
    CrimineleditComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
