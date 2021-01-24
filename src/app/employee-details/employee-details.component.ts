import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Department, Employee } from '../shared/models/employee.model';
import { EmployeeService } from '../shared/services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit, OnChanges {
  @Input() employee: Employee;
  employeeForm: FormGroup;
  deptList$ : Observable<Department[]>;
  editMode: boolean = false;

  constructor(private readonly formBuilder: FormBuilder,
    private readonly employeeService: EmployeeService,
    private readonly router: Router) {
    this.employeeForm = this.formBuilder.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      age: ['', [Validators.required]],
      address: ['', [Validators.required]],
      department: ['', Validators.required],
      phone: this.formBuilder.array([])
    });

    this.deptList$ = this.employeeService.getDepartmentList();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.hasOwnProperty('employee') && changes.employee.currentValue){
      this.employeeForm.reset();
      this.phones.clear();
      this.employeeForm.patchValue(this.employee);
      this.employeeForm.controls.department.patchValue(this.employee.department.id);
      this.patchPhone();
    }
  }

  ngOnInit(): void {
    this.employeeForm.valueChanges.subscribe(value => {
      console.log(value);
    })
  }

  get phones(){
    return this.employeeForm.controls.phone as FormArray;
  }

  patchPhone(){
    this.employee.phoneList.number.forEach((phone, i) => {
      if(!this.phones.controls[i]){
        this.phones.push(new FormControl(phone))
      }else{
        this.phones.controls[i].patchValue(phone)
      }
    })
  }

  onAddPhone() {
    this.phones.push(new FormControl(''));
  }

  onDeletePhone(index: number) {
    this.phones.removeAt(index);
  }

  setEditMode(){
    this.editMode = !this.editMode

    if(!this.editMode){
      this.deptList$.pipe(take(1)).subscribe(depts => {
        let value = this.employeeForm.value
        value.department = depts.find(x => x.id == value.department);
        value.phoneList = {
          id: this.employee.phoneList.id,
          number: value.phone
        }
        delete value.phone
        this.employeeService.setEmployeeDetails(value).subscribe(x => this.employee = x);
      })
      
    }
  }

  onAbout(){
    this.router.navigate(['/about']);
  }

}
