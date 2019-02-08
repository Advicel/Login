import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatTabsModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatSidenavModule,
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
  MatTableModule,
  MatExpansionModule
} from '@angular/material';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { EmployeeTableComponent } from './employee-table/employee-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    EmployeeTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule,
    MatTableModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
