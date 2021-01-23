import { Component, Input, OnInit, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Employee } from '../shared/models/employee.model';
import { EmployeeService } from '../shared/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit, OnChanges {
  @Input() employeeList : Employee[];
  @Output() employeeSelected : EventEmitter<Employee> = new EventEmitter();
  selectedId: number;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.hasOwnProperty('employeeList') && changes.employeeList.currentValue){
      this.employeeSelected.emit(this.employeeList[0]);
      this.selectedId = this.employeeList[0].id;
    }
  }

  ngOnInit(): void {
    
  }

  selectedEmployee(employee: Employee){
    this.employeeSelected.emit(employee);
    this.selectedId = employee.id;
  }

}
