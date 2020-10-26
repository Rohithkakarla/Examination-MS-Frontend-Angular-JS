import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { StudentserviceService } from '../services/studentservice.service';

@Component({
  selector: 'app-studentlogin',
  templateUrl: './studentlogin.component.html',
  styleUrls: ['./studentlogin.component.scss']
})
export class StudentloginComponent implements OnInit {

  constructor(public router: Router,
              private studentserviceobj:StudentserviceService) { 
                sessionStorage.clear();
              }

  ngOnInit() {
  }

  studentloginform = new FormGroup({
    userid : new FormControl(),
    password : new FormControl()
  });

  studentdetails:any = {
    "userid":"",
    "name":"",
    "email":"",
    "password":"",
    "status":""
  };

  studentlogin()
  {
    let studentobj ={
      "userid" : this.studentloginform.value.userid,
      "password" : this.studentloginform.value.password
    }

    this.studentserviceobj.getaparticularstudent(studentobj).subscribe(response =>{
      console.log(response);
      this.studentdetails = response;
      if(this.studentdetails.email == null)
      {

      }
      else
      {
        sessionStorage.setItem("studentid",this.studentdetails.userid);
        sessionStorage.setItem("name",this.studentdetails.name);
        sessionStorage.setItem("email",this.studentdetails.email);
        sessionStorage.setItem("status",this.studentdetails.status);
        console.log(this.studentdetails);
        this.router.navigate(['/student']);
      }
    })
    
  }
}
