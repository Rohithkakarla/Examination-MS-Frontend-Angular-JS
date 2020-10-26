import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseserviceService } from '../services/courseservice.service';
import { ExamserviceService } from '../services/examservice.service';

@Component({
  selector: 'app-studentpage',
  templateUrl: './studentpage.component.html',
  styleUrls: ['./studentpage.component.scss']
})
export class StudentpageComponent implements OnInit {

  studentname:String;
  studentid:String;

  coursedetails:any;
  examdetails:any;

  constructor(public router: Router,private courseservice: CourseserviceService,private examservice:ExamserviceService) {
    this.studentname = sessionStorage.getItem("name");
    this.studentid = sessionStorage.getItem("studentid");

    this.courseservice.getallcourses().subscribe(
      response => {
        console.log(response);
        this.coursedetails = response;
    });

    this.examservice.getallexams().subscribe(
      response => {
        console.log(response);
        this.examdetails = response;
        console.log(this.examdetails);
    });
  }

  ngOnInit() {
  }
}
