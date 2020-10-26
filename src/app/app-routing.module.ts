import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { StudentloginComponent } from './studentlogin/studentlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FacultyloginComponent } from './facultylogin/facultylogin.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { StudentpageComponent } from './studentpage/studentpage.component';
import { FacultypageComponent } from './facultypage/facultypage.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome' , component: WelcomepageComponent},
  { path: 'studentlogin' , component: StudentloginComponent },
  { path: 'adminlogin' , component: AdminloginComponent },
  { path: 'facultylogin' , component: FacultyloginComponent },
  { path: 'admin' , component: AdminpageComponent },
  { path: 'student' , component: StudentpageComponent },
  { path: 'faculty' , component: FacultypageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
