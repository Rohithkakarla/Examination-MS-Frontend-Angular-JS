import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseserviceService } from '../services/courseservice.service';
import { FacultyserviceService } from '../services/facultyservice.service';
import { FormGroup, FormControl } from '@angular/forms';
import { StudentserviceService } from '../services/studentservice.service';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.scss']
})
export class AdminpageComponent implements OnInit {
  
  ngOnInit() { }

  studentdetails:any;
  facultydetails:any;
  coursedetails:any;

  constructor(public router: Router,
              private studentservice:StudentserviceService, 
              private facultyservice:FacultyserviceService,
              private courseservice:CourseserviceService) 
    { 
    
    this.studentservice.getallstudents().subscribe(
      response => {
        console.log(response);
        this.studentdetails = response;
    });
    this.facultyservice.getallfaculty().subscribe(
      response => {
        console.log(response);
        this.facultydetails = response;
    });
    this.courseservice.getallcourses().subscribe(
      response => {
        console.log(response);
        this.coursedetails = response;
    });
}

studentform = new FormGroup({
    studentid : new FormControl(),
    name : new FormControl(),
    email : new FormControl(),
    password : new FormControl(),
    status : new FormControl() 
  });
  
  addstudent()
  {
    let studentobj = {
      "userid":this.studentform.value.studentid,
      "name":this.studentform.value.name,
      "email":this.studentform.value.email,
      "password":this.studentform.value.password,
      "status":this.studentform.value.status
      }
      console.log(studentobj);

      if(studentobj.name != null || studentobj.email != null || studentobj.password != null)
      {
        this.studentservice.addstudent(studentobj).subscribe(response=>{
          console.log(response);
          this.studentservice.getallstudents().subscribe(
            response => {
              console.log(response);
              this.studentdetails = response;
          });
        },
        (error) => {
          console.log(error);
          alert("Something went wrong Check the console");
        });
      }   
  }

  facultyform = new FormGroup({
    facultyid : new FormControl(),
    name : new FormControl(),
    email : new FormControl(),
    password : new FormControl(),
    status : new FormControl() 
  });

  addfaculty()
  {
    let facultyobj = {
      "facultyid":this.facultyform.value.facultyid,
      "name":this.facultyform.value.name,
      "email":this.facultyform.value.email,
      "password":this.facultyform.value.password,
      "status":this.facultyform.value.status
      }
      console.log(facultyobj);

      if(facultyobj.name != null || facultyobj.email != null || facultyobj.password != null)
      {
        this.facultyservice.addfaculty(facultyobj).subscribe(response=>{
          console.log(response);
          this.facultyservice.getallfaculty().subscribe(
            response => {
              console.log(response);
              this.facultydetails = response;
          });
        },
        (error) => {
          console.log(error);
          alert("Something went wrong Check the console");
        });
      }
  }


  courseform = new FormGroup({
    courseid : new FormControl(),
    name : new FormControl(),
    facultyid : new FormControl(),
    status : new FormControl() 
  });

  addcourse()
  {
    let courseobj = {
      "courseid":this.courseform.value.courseid,
      "name":this.courseform.value.name,
      "facultyid":this.courseform.value.facultyid,
      "status":this.courseform.value.status
      }
      console.log(courseobj);

      if(courseobj.name != null || courseobj.courseid != null || courseobj.facultyid != null)
      {
        this.courseservice.addcourse(courseobj).subscribe(response=>{
          console.log(response);
          this.courseservice.getallcourses().subscribe(
            response => {
              console.log(response);
              this.coursedetails = response;
          });
        },
        (error) => {
          console.log(error);
          alert("Something went wrong Check the console");
        });
      }
  }

}
