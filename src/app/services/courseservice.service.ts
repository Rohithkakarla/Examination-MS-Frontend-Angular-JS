import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseserviceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    }),
  }

  constructor(private http:HttpClient) { }
  getallcourseUrl = "http://localhost:8080/courses";

  getallcourses(){
    return this.http.get(this.getallcourseUrl+"/getallcourses");
  }

  addcourse(courseobj:any)
  {
    return this.http.post(this.getallcourseUrl+"/addcourse",JSON.stringify(courseobj), this.httpOptions);
  }

  getcoursesoffaculty(facultyidobj:any)
  {
    return this.http.post(this.getallcourseUrl+"/getcoursesoffaculty",JSON.stringify(facultyidobj), this.httpOptions);
  }
}
