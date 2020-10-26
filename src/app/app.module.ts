import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { FacultyloginComponent } from './facultylogin/facultylogin.component';
import { FacultypageComponent } from './facultypage/facultypage.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { StudentpageComponent } from './studentpage/studentpage.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    AdminloginComponent,
    AdminpageComponent,
    FacultyloginComponent,
    FacultypageComponent,
    StudentloginComponent,
    StudentpageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }