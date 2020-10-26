import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacultyserviceService {

  constructor(private http:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    }),
  }

  getallfacultyUrl = "http://localhost:8080/faculty";

  getallfaculty(){
    return this.http.get(this.getallfacultyUrl+"/getallfaculty");
  }

  addfaculty(facultyobj:any)
  {
    return this.http.post(this.getallfacultyUrl+"/addfaculty",JSON.stringify(facultyobj), this.httpOptions);
  }

  getaparticularfaculty(facultyobj:any)
  {
    return this.http.post(this.getallfacultyUrl+"/checkfaculty",JSON.stringify(facultyobj), this.httpOptions);
  }

  
}
