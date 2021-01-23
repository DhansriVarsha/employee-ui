import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../shared/models/employee.model';
import { EmployeeService } from '../shared/services/employee.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  employeeList$ : Observable<Employee[]>;
  selectedEmployee : Employee;

  constructor(private readonly employeeService: EmployeeService) {
      this.employeeList$ = this.employeeService.getEmployeeList();
   }

  ngOnInit(): void {
  }

  getSelected(employee: Employee){
    this.selectedEmployee = employee;
  }

}
