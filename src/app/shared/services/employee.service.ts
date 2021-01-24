import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Department, Employee } from '../models/employee.model';
import {departments, employees}from '../../../assets/sampledata/employee';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private readonly http: HttpClient) { }

  getEmployeeList(): Observable<Employee[]> {
    return this.http.get(`http://localhost:8080/api/employee`).pipe(
      map((data: Employee[]) => {
        return data;
      })
    )
    //return of(employees);
  }

  getDepartmentList(): Observable<Department[]> {
    return this.http.get(`http://localhost:8080/api/department`).pipe(
      map((data: Department[]) => {
        return data;
      })
    )
    //return of(departments);
  }

  setEmployeeDetails(employee: Employee){
    return this.http.put(`http://localhost:8080/api/employee/${employee.id}`, employee).pipe(
      map((data: any) => {
        return data;
      })
    );
    //console.log(employee);
  }

}
