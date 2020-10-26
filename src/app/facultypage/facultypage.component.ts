import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseserviceService } from '../services/courseservice.service';
import { ExamserviceService } from '../services/examservice.service';
import { FacultyserviceService } from '../services/facultyservice.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-facultypage',
  templateUrl: './facultypage.component.html',
  styleUrls: ['./facultypage.component.scss']
})
export class FacultypageComponent implements OnInit {

  facultyname:String;
  facultyid:String;

  coursedetails:any;
  examdetails:any;
  noexams:boolean = true;
  facultyidobj;
  constructor(public router: Router,
              private facultyservice:FacultyserviceService,
              private courseservice:CourseserviceService,
              private examservice:ExamserviceService)
  {
    this.facultyname = sessionStorage.getItem("name");
    this.facultyid = sessionStorage.getItem("facultyid");

    this.facultyidobj ={
      "facultyid":sessionStorage.getItem("facultyid")
    }

    this.courseservice.getcoursesoffaculty(this.facultyidobj).subscribe(response=>{
      console.log(response);
      this.coursedetails = response;
    });

    this.examservice.getexamsoffaculty(this.facultyidobj).subscribe(response=>{
      console.log("Exam details");
      console.log(response);
      this.examdetails = response;
      if(this.examdetails != null)
      {
        this.noexams = false;
      }
    });

    
  }

  examform = new FormGroup({
    name : new FormControl(),
    courseid : new FormControl()
  });

  scheduleexam()
  {
    let examobj = {
      "name":this.examform.value.name,
      "courseid":this.examform.value.courseid,
      "facultyid":sessionStorage.getItem("facultyid")
    }
    console.log(examobj);

    this.examservice.addexam(examobj).subscribe(response=>{
      console.log(response);

      this.examservice.getexamsoffaculty(this.facultyidobj).subscribe(response=>{
        console.log("Exam details");
        console.log(response);
        this.examdetails = response;
        if(this.examdetails != null)
        {
          this.noexams = false;
        }
      });
    })
  }

  ngOnInit() {
  }

}
