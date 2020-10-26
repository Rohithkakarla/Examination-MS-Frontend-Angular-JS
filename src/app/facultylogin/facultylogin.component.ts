import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacultyserviceService } from '../services/facultyservice.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-facultylogin',
  templateUrl: './facultylogin.component.html',
  styleUrls: ['./facultylogin.component.scss']
})
export class FacultyloginComponent implements OnInit {

  constructor(public router: Router,
    private facultyserviceobj:FacultyserviceService) { 
      sessionStorage.clear();
    }

  ngOnInit() {
  }

  facultyloginform = new FormGroup({
    facultyid : new FormControl(),
    password : new FormControl()
  });

  facultydetails:any = {
    "facultyid":"",
    "name":"",
    "email":"",
    "password":"",
    "status":""
  };

  facultylogin()
  {
    let facultyobj ={
      "facultyid" : this.facultyloginform.value.facultyid,
      "password" : this.facultyloginform.value.password
    }

    this.facultyserviceobj.getaparticularfaculty(facultyobj).subscribe(response =>{
      console.log(response);
      this.facultydetails = response;
      if(this.facultydetails.email == null)
      {

      }
      else
      {
        sessionStorage.setItem("facultyid",this.facultydetails.facultyid);
        sessionStorage.setItem("name",this.facultydetails.name);
        sessionStorage.setItem("email",this.facultydetails.email);
        sessionStorage.setItem("status",this.facultydetails.status);
        console.log(this.facultydetails);
        this.router.navigate(['/faculty']);
      }
    })
    
  }
}
