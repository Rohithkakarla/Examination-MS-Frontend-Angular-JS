import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {

  constructor(private http:HttpClient) { }
  getallstudentsUrl = "http://localhost:8080/students";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    }),
  }

  getallstudents(){
    return this.http.get(this.getallstudentsUrl+"/getallstudents");
  }
  addstudent(studentobj:any)
  {
    return this.http.post(this.getallstudentsUrl+"/addstudent",JSON.stringify(studentobj), this.httpOptions);
  }

  getaparticularstudent(studentobj:any)
  {
    return this.http.post(this.getallstudentsUrl+"/checkstudent",JSON.stringify(studentobj), this.httpOptions);
  }
}
