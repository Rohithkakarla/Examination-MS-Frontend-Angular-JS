import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.scss']
})
export class AdminloginComponent implements OnInit {

  constructor(public router: Router) {
    sessionStorage.clear();
   }

  ngOnInit() {
  }

  adminform = new FormGroup({
    adminid : new FormControl(),
    password : new FormControl()
  });

  adminlogin()
  {
    if(this.adminform.value.adminid == "admin123" && this.adminform.value.password == "admin")
    {
      this.router.navigate(['/admin']);
    }
  }
}
