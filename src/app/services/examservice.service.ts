import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExamserviceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    }),
  }

  constructor(private http:HttpClient) { }

  getallexamUrl = "http://localhost:8080/exams";

  getexamsoffaculty(facultyidobj:any)
  {
    return this.http.post(this.getallexamUrl+"/getexamsoffaculty",JSON.stringify(facultyidobj), this.httpOptions);
  }

  addexam(examobj:any)
  {
    return this.http.post(this.getallexamUrl+"/addexam",JSON.stringify(examobj), this.httpOptions);
  }

  getallexams()
  {
    return this.http.get(this.getallexamUrl+"/getallexams", this.httpOptions);
  }
}
